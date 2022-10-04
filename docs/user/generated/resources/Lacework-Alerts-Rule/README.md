# Lacework::Alerts::Rule

A Lacework resource for managing the rules by which alerts are invoked

## Syntax

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON

<pre>
{
    "Type" : "Lacework::Alerts::Rule",
    "Properties" : {
        "<a href="#intgguidlist" title="IntgGuidList">IntgGuidList</a>" : <i>[ String, ... ]</i>,
        "<a href="#type" title="Type">Type</a>" : <i>String</i>,
        "<a href="#filters" title="Filters">Filters</a>" : <i><a href="filters.md">Filters</a></i>,
    }
}
</pre>

### YAML

<pre>
Type: Lacework::Alerts::Rule
Properties:
    <a href="#intgguidlist" title="IntgGuidList">IntgGuidList</a>: <i>
      - String</i>
    <a href="#type" title="Type">Type</a>: <i>String</i>
    <a href="#filters" title="Filters">Filters</a>: <i><a href="filters.md">Filters</a></i>
</pre>

## Properties

#### IntgGuidList

The alert channels for the rule to access.

_Required_: Yes

_Type_: List of String

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### Type

The alert type.

_Required_: Yes

_Type_: String

_Allowed Values_: <code>Event</code>

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### Filters

When sending a request, use this object to define the new alert rule. When included in a response, this object contains details of an alert rule. You can use these attributes when searching for existing alert rules by invoking a GET request.

_Required_: Yes

_Type_: <a href="filters.md">Filters</a>

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

## Return Values

### Ref

When you pass the logical ID of this resource to the intrinsic `Ref` function, Ref returns the McGuid.

### Fn::GetAtt

The `Fn::GetAtt` intrinsic function returns a value for a specified attribute of this type. The following are the available attributes and sample return values.

For more information about using the `Fn::GetAtt` intrinsic function, see [Fn::GetAtt](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/intrinsic-function-reference-getatt.html).

#### McGuid

Alert Rule ID

#### CreatedOrUpdatedTime

The timestamp for when the alert channel was created or last updated.

