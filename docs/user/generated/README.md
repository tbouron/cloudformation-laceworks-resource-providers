# Lacework CloudFormation Resources

This collection of CloudFormation resource types allow Lacework to be controlled using AWS CloudFormation.

### Why would I want to do this?

Infrastructure-as-code such as CloudFormation is one of the best ways to create and maintain infrastructure that is 
reliable and secure. Or a CloudFormation template might just be more convenient for some types of automation.

Here is a sample use case this supports:

* [Configuring Laceworks to monitor your application](stories/monitoring-an-app)

### How do I get started?

In the AWS CloudFormation UI, find the Lacework types in the third-party registry and activate them.
Alternatively follow the [Developer](docs/dev) instructions to install them manually.

You will need to set up a [Type Configuration](https://awscli.amazonaws.com/v2/documentation/api/latest/reference/cloudformation/set-type-configuration.html)
for each of the activated types, containing a Lacework  **Url**, **AccessKeyId**, and **SecretKey** in order to reach the Databricks API correctly.
It is recommended to set the token into Systems Manager's secure parameter store,
e.g. as `/path/to/lacework/token` and then it can be applied any of the Databricks types,
e.g. `Lacework::Queries::Query`, using:

```bash
aws --output yaml --no-cli-pager cloudformation set-type-configuration \                                        ✘ 130
  --type RESOURCE --type-name Lacework::Queries::Query \
  --configuration-alias default \
  --configuration '{"LaceworkAccess": {"Url": "{{resolve:ssm-secure:/path/to/lacework/url}}",  "AccessKeyId":"{{resolve:ssm-secure:/path/to/lacework/accesskeyid}}", "SecretKey": "{{resolve:ssm-secure:/path/to/lacework/secretkey}}"}}' \
  --region eu-west-1
```

You should then be able to run the example use cases above or build your own using the full reference below.

### What is supported?

This project does not support all the objects nor concepts in Lacework.
For many things there just isn't a compelling use case, and of course there are a lot.
We have focussed on those objects and properties which have seemed most useful.
If we missed something, open an issue to let us know, or even better, contribute an extension!

The **Full Lacework CloudFormation Resources Reference** is available [here](resources).