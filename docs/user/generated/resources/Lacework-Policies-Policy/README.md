# Lacework::Policies::Policy

A Lacework resource for configuring how an alert is handled

## Syntax

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON

<pre>
{
    "Type" : "Lacework::Policies::Policy",
    "Properties" : {
        "<a href="#policyid" title="PolicyId">PolicyId</a>" : <i>String</i>,
        "<a href="#policytype" title="PolicyType">PolicyType</a>" : <i>String</i>,
        "<a href="#queryid" title="QueryId">QueryId</a>" : <i>String</i>,
        "<a href="#title" title="Title">Title</a>" : <i>String</i>,
        "<a href="#enabled" title="Enabled">Enabled</a>" : <i>Boolean</i>,
        "<a href="#description" title="Description">Description</a>" : <i>String</i>,
        "<a href="#remediation" title="Remediation">Remediation</a>" : <i>String</i>,
        "<a href="#severity" title="Severity">Severity</a>" : <i>String</i>,
        "<a href="#limit" title="Limit">Limit</a>" : <i>Double</i>,
        "<a href="#alertenabled" title="AlertEnabled">AlertEnabled</a>" : <i>Boolean</i>,
        "<a href="#alertprofile" title="AlertProfile">AlertProfile</a>" : <i>String</i>,
        "<a href="#tags" title="Tags">Tags</a>" : <i>[ String, ... ]</i>,
    }
}
</pre>

### YAML

<pre>
Type: Lacework::Policies::Policy
Properties:
    <a href="#policyid" title="PolicyId">PolicyId</a>: <i>String</i>
    <a href="#policytype" title="PolicyType">PolicyType</a>: <i>String</i>
    <a href="#queryid" title="QueryId">QueryId</a>: <i>String</i>
    <a href="#title" title="Title">Title</a>: <i>String</i>
    <a href="#enabled" title="Enabled">Enabled</a>: <i>Boolean</i>
    <a href="#description" title="Description">Description</a>: <i>String</i>
    <a href="#remediation" title="Remediation">Remediation</a>: <i>String</i>
    <a href="#severity" title="Severity">Severity</a>: <i>String</i>
    <a href="#limit" title="Limit">Limit</a>: <i>Double</i>
    <a href="#alertenabled" title="AlertEnabled">AlertEnabled</a>: <i>Boolean</i>
    <a href="#alertprofile" title="AlertProfile">AlertProfile</a>: <i>String</i>
    <a href="#tags" title="Tags">Tags</a>: <i>
      - String</i>
</pre>

## Properties

#### PolicyId

Policy ID. The convention for policy ID creation is `accountName-remainder`, for example, lws-special-100. When sending a request, you can simply provide `$account-<remainder>`, and Lacework will substitute the `$account` prefix with your actual account name. **Note:** The `-remainder` must use the regex pattern (`^[a-z]{1,16}(-\d{1,8})?$`), and cannot be `default` or start with `default-`.

_Required_: No

_Type_: String

_Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)

#### PolicyType

The policy type such as `Violation`.

_Required_: No

_Type_: String

_Allowed Values_: <code>Violation</code>

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### QueryId

Identifier of the query that executes while running the policy.

_Required_: Yes

_Type_: String

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### Title

The policy's title.

_Required_: Yes

_Type_: String

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### Enabled

When sending a request, use this attribute to enable or disable a policy. When included in a response, returns `True` for enabled policies, or returns `False` for disabled policies.

_Required_: Yes

_Type_: Boolean

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### Description

Information about the new policy.

_Required_: Yes

_Type_: String

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### Remediation

Remediation strategy for the events triggered by the policy.

_Required_: Yes

_Type_: String

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### Severity

The severity of an event triggered by the policy.

_Required_: Yes

_Type_: String

_Allowed Values_: <code>info</code> | <code>low</code> | <code>medium</code> | <code>high</code> | <code>critical</code>

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### Limit

The maximum number of records that each policy will return. The default value is 1000.

_Required_: No

_Type_: Double

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### AlertEnabled

When sending a request, set to `True` if you want to send alerts to an alert profile when the policy is triggered. Set to `False` if you want to mute alerts when the policy is triggered.

_Required_: Yes

_Type_: Boolean

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### AlertProfile

The alert profile to use for sending alerts when the policy is triggered.

_Required_: No

_Type_: String

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### Tags

A list of policy tags.

_Required_: No

_Type_: List of String

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

## Return Values

### Ref

When you pass the logical ID of this resource to the intrinsic `Ref` function, Ref returns the PolicyId.

### Fn::GetAtt

The `Fn::GetAtt` intrinsic function returns a value for a specified attribute of this type. The following are the available attributes and sample return values.

For more information about using the `Fn::GetAtt` intrinsic function, see [Fn::GetAtt](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/intrinsic-function-reference-getatt.html).

#### EvaluatorId

Evaluator ID. For POST and PATCH endpoints, the `evaluatorId` field is still accepted but is ignored. No warning is returned if an `evaluatorId` is provided; this behavior may change in the future. For responses from all of these calls, an `evaluatorId` field is no longer returned.

#### Owner

The user who created the policy.

#### LastUpdateTime

The timestamp for when the policy was last updated.

#### LastUpdateUser

The user who last updated the policy.

