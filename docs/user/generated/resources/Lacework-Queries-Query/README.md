# Lacework::Queries::Query

A resource for managing Lacework queries

## Syntax

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON

<pre>
{
    "Type" : "Lacework::Queries::Query",
    "Properties" : {
        "<a href="#queryid" title="QueryId">QueryId</a>" : <i>String</i>,
        "<a href="#querytext" title="QueryText">QueryText</a>" : <i>String</i>,
    }
}
</pre>

### YAML

<pre>
Type: Lacework::Queries::Query
Properties:
    <a href="#queryid" title="QueryId">QueryId</a>: <i>String</i>
    <a href="#querytext" title="QueryText">QueryText</a>: <i>String</i>
</pre>

## Properties

#### QueryId

Identifier of the query that executes while running the  policy.

_Required_: Yes

_Type_: String

_Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)

#### QueryText

When sending a request, provide a human-readable text syntax for specifying selection, filtering, and manipulation of data.

_Required_: Yes

_Type_: String

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

## Return Values

### Ref

When you pass the logical ID of this resource to the intrinsic `Ref` function, Ref returns the QueryId.

### Fn::GetAtt

The `Fn::GetAtt` intrinsic function returns a value for a specified attribute of this type. The following are the available attributes and sample return values.

For more information about using the `Fn::GetAtt` intrinsic function, see [Fn::GetAtt](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/intrinsic-function-reference-getatt.html).

#### EvaluatorId

Optional identifier of the evaluator where the query is run. This field is only for `CloudTrail` queries and policies.

#### Owner

User that created the query

#### LastUpdateTime

Timestamp in the form yyyy-MM-dd'T'HH:mm:ss.SSS'Z'

#### LastUpdateUser

User that last affected the state of this query

#### ResultSchema

A list of schemas that match your query.

