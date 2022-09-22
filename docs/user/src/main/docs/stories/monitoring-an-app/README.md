# Configuring Lacework to work with an Application

## Create an Agent Token

The following cloudformation will create an Agent token.  This is used when installing agents within your aplications 
infrastructure.

```yaml
AWSTemplateFormatVersion: '2010-09-09'

Description: |
   The following CloudFormation Lacework resource types set up your Lacework environment

Resources:
   AgentsToken:
      Type: Lacework::Agents::Token
      Properties:
         Props:
            Description: My CFN Provisioned Token
         TokenEnabled: 1
         TokenAlias: My_CFN Token Dev
```

## Configuring Alerts

From the Lacework Docs - "Lacework combines alert channels and alert rules to provide a flexible method for routing alerts. 
For alert channels, you define information about where to send alerts, such as to Jira, Slack, or email. For alert rules, 
you define information about which alert types to send, such as critical and high severity compliance alerts."

"An alert profile is a set of metadata that defines how your LQL queries get consumed into events and alerts.

Alert profiles exist as a system. Lacework provides a set of predefined alert profiles to ensure that policy evaluation 
gives you useful results out of the box. To create your own customized profiles, you extend an existing alert profile 
and add your custom definitions to it. The predefined alert profiles and operations for defining and editing your own 
are exposed via Lacework API calls."

We use the following Cloudformation yaml to set up Lacework alerts.

```yaml

  AlertsChannel:
    Type: Lacework::Alerts::Channel
    Properties:
      Name: Test Email
      Type: EmailUser
      Enabled: 1
      Data:
        channelProps:
          recipients:
          - "alert-recipient@example.com"

  AlertsProfile:
    Type: Lacework::Alerts::Profile
    Properties:
      AlertProfileId: Custom_Test_AlertProfile
      Extends: LW_HE_MACHINES_DEFAULT_PROFILE
      Alerts:
        - Name: HE_Machine_NewViolation
          EventName: Custom LW Host Entity Machine New Violation Alert
          Description: Custom New Violation for machine
          Subject: Custom New violation detected for machine

  AlertsRule:
    Type: Lacework::Alerts::Rule
    Properties:
      Filters:
        Name: MyRule
        Description: A description
        Enabled: 1
        Severity:
        - 1
      IntgGuidList:
      - !GetAtt AlertsChannel.IntgGuid
      Type: Event

```

## LQL Queries and Policies

"Queries are the mechanism used to interactively request information from a specific curated datasource. Queries have a defined structure for authoring detections."

```yaml
  Query:
    Type: Lacework::Queries::Query
    Properties:
      QueryId: myTestId
      QueryText: "{    source {        CloudTrailRawEvents    }    filter {        EVENT_SOURCE = 'ec2.amazonaws.com'        and EVENT_NAME in (            'CreateNetworkAcl',            'CreateNetworkAclEntry',            'DeleteNetworkAcl',            'DeleteNetworkAclEntry',            'ReplaceNetworkAclEntry',            'ReplaceNetworkAclAssociation'        )        and ERROR_CODE is null    }    return distinct {        INSERT_ID,        INSERT_TIME,        EVENT_TIME,        EVENT    }}"
```

"Policies are a mechanism used to add annotated metadata to queries for improving the context of alerts, reports, and information displayed in the Lacework Console. You can fully customize policies."

```yaml
  Policy:
    Type: Lacework::Policies::Policy
    Properties:
      QueryId: !Ref Query
      Title: Test Title
      Enabled: true
      Description: Test Description
      Remediation: Test remediation
      Severity: info
      Limit: 1000
      AlertEnabled: true
      AlertProfile: LW_CloudTrail_Alerts.CloudTrailDefaultAlert_AwsResource
      Tags:
      - Test Tag
      - domain:AWS
      - subdomain:Cloudtrail
      PolicyId: aws-cfn-pub-reg-x-test-100
```

## Deploying the resources

You can deploy the above using the [example.yaml](example.yaml)