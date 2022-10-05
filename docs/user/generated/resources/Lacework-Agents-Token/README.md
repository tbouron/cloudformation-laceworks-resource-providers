# Lacework::Agents::Token

Lacework Agent Token schema.  Once created a Lacework Agent token cannot be deleted so if you remove this resource Cloudformation will disable the token.

## Syntax

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON

<pre>
{
    "Type" : "Lacework::Agents::Token",
    "Properties" : {
        "<a href="#tokenalias" title="TokenAlias">TokenAlias</a>" : <i>String</i>,
        "<a href="#tokenenabled" title="TokenEnabled">TokenEnabled</a>" : <i>Double</i>,
        "<a href="#props" title="Props">Props</a>" : <i><a href="props.md">Props</a></i>,
    }
}
</pre>

### YAML

<pre>
Type: Lacework::Agents::Token
Properties:
    <a href="#tokenalias" title="TokenAlias">TokenAlias</a>: <i>String</i>
    <a href="#tokenenabled" title="TokenEnabled">TokenEnabled</a>: <i>Double</i>
    <a href="#props" title="Props">Props</a>: <i><a href="props.md">Props</a></i>
</pre>

## Properties

#### TokenAlias

The token's alias such as Ops Agent. Aliases help communicate the intended purpose of a token and are effective when a value with a single intent appears in multiple places.

_Required_: Yes

_Type_: String

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### TokenEnabled

The tokenEnabled property determines if an edit control is a "Text token" edit control. When the tokenEnabled property is set to 1, if the user enters a separator character or a carriage return (CR), a token is automatically added and the user can continue entering values in the control.

_Required_: Yes

_Type_: Double

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### Props

The access token's properties, including createdTime and description.

_Required_: No

_Type_: <a href="props.md">Props</a>

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

## Return Values

### Ref

When you pass the logical ID of this resource to the intrinsic `Ref` function, Ref returns the AccessToken.

### Fn::GetAtt

The `Fn::GetAtt` intrinsic function returns a value for a specified attribute of this type. The following are the available attributes and sample return values.

For more information about using the `Fn::GetAtt` intrinsic function, see [Fn::GetAtt](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/intrinsic-function-reference-getatt.html).

#### AccessToken

The new agent access token.

#### CreatedTime

Returns the <code>CreatedTime</code> value.

#### Version

Returns the <code>Version</code> value.

