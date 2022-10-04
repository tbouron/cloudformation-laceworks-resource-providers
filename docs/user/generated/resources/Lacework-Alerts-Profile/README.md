# Lacework::Alerts::Profile

A resource for associating a Lacework alert with a profile

## Syntax

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON

<pre>
{
    "Type" : "Lacework::Alerts::Profile",
    "Properties" : {
        "<a href="#alertprofileid" title="AlertProfileId">AlertProfileId</a>" : <i>String</i>,
        "<a href="#extends" title="Extends">Extends</a>" : <i>String</i>,
        "<a href="#alerts" title="Alerts">Alerts</a>" : <i>[ Map, ... ]</i>
    }
}
</pre>

### YAML

<pre>
Type: Lacework::Alerts::Profile
Properties:
    <a href="#alertprofileid" title="AlertProfileId">AlertProfileId</a>: <i>String</i>
    <a href="#extends" title="Extends">Extends</a>: <i>String</i>
    <a href="#alerts" title="Alerts">Alerts</a>: <i>
      - Map</i>
</pre>

## Properties

#### AlertProfileId

Unique id within customer account for Alert Profile

_Required_: Yes

_Type_: String

_Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)

#### Extends

Base Lacework defined Alert Profile to inherit properties

_Required_: Yes

_Type_: String

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### Alerts

An alert is a definition of content to create from the results of a resource's policy violation. The event name, subject, and description contained in the alert appear in pushed alerts and in the Lacework Console.

_Required_: Yes

_Type_: List of Map

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

## Return Values

### Ref

When you pass the logical ID of this resource to the intrinsic `Ref` function, Ref returns the AlertProfileId.
