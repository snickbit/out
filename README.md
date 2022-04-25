# Class: Out

## Hierarchy

- `Function`

  ↳ **`Out`**

## Callable

### Out

▸ **Out**(...`messages`): [`Out`](Out.md)

Cross-platform pretty output for your terminal or browser console.

#### Parameters

| Name | Type |
| :------ | :------ |
| `...messages` | `any`[] |

#### Returns

[`Out`](Out.md)

## Table of contents

### Properties

- [block](Out.md#block)
- [broken](Out.md#broken)
- [center](Out.md#center)
- [debug](Out.md#debug)
- [done](Out.md#done)
- [error](Out.md#error)
- [exception](Out.md#exception)
- [exit](Out.md#exit)
- [fatal](Out.md#fatal)
- [force](Out.md#force)
- [info](Out.md#info)
- [ln](Out.md#ln)
- [log](Out.md#log)
- [noExit](Out.md#noexit)
- [notice](Out.md#notice)
- [silly](Out.md#silly)
- [success](Out.md#success)
- [throw](Out.md#throw)
- [title](Out.md#title)
- [trace](Out.md#trace)
- [verbose](Out.md#verbose)
- [warn](Out.md#warn)

### Methods

- [\_](Out.md#_)
- [after](Out.md#after)
- [apply](Out.md#apply)
- [before](Out.md#before)
- [call](Out.md#call)
- [case](Out.md#case)
- [clear](Out.md#clear)
- [clone](Out.md#clone)
- [config](Out.md#config)
- [disable](Out.md#disable)
- [enable](Out.md#enable)
- [ev](Out.md#ev)
- [example](Out.md#example)
- [extra](Out.md#extra)
- [extraVerbosity](Out.md#extraverbosity)
- [formatter](Out.md#formatter)
- [getVerbosity](Out.md#getverbosity)
- [heading](Out.md#heading)
- [isVerbose](Out.md#isverbose)
- [label](Out.md#label)
- [prefix](Out.md#prefix)
- [rule](Out.md#rule)
- [setVerbosity](Out.md#setverbosity)
- [v](Out.md#v)
- [verbosity](Out.md#verbosity)
- [write](Out.md#write)

## Properties

### block

• **block**: [`Out`](Out.md)

Print the output with a horizontal line above and below it

___

### broken

• **broken**: [`Out`](Out.md)

Break the output into multiple lines

___

### center

• **center**: [`Out`](Out.md)

Center the text in the terminal, only works in Node.js. In the browser the text will be relatively centered with itself, but not in the entire console window.

___

### debug

• **debug**: [`Out`](Out.md)

Debug level output

___

### done

• **done**: [`Out`](Out.md)

Done level output. In Node.js this will also exit the process with a 0 exit code.

___

### error

• **error**: [`Out`](Out.md)

Error level output

___

### exception

• **exception**: [`Out`](Out.md)

Exception level output

___

### exit

• **exit**: [`Out`](Out.md)

(Node.js only) Exit the process with the given code, defaults to 0

___

### fatal

• **fatal**: [`Out`](Out.md)

Fatal level output. In Node.js this will also exit the process with a 1 exit code.

___

### force

• **force**: [`Out`](Out.md)

Force the output to be rendered regardless of verbosity

___

### info

• **info**: [`Out`](Out.md)

Info level output

___

### ln

• **ln**: [`Out`](Out.md)

Print an empty line

___

### log

• **log**: [`Out`](Out.md)

Log level output

___

### noExit

• **noExit**: [`Out`](Out.md)

Disable exiting

___

### notice

• **notice**: [`Out`](Out.md)

Notice level output

___

### silly

• **silly**: [`Out`](Out.md)

Silly level output

___

### success

• **success**: [`Out`](Out.md)

Success level output

___

### throw

• **throw**: [`Out`](Out.md)

Same as error level output but also throws an error

___

### title

• **title**: [`Out`](Out.md)

Print the output with a double horizontal line below it

___

### trace

• **trace**: [`Out`](Out.md)

Trace level output

___

### verbose

• **verbose**: [`Out`](Out.md)

Verbose level output

___

### warn

• **warn**: [`Out`](Out.md)

Warn level output

## Methods

### \_

▸ **_**(`message`): `void`

Output the store

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `string` |

#### Returns

`void`

▸ **_**(`exit`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `exit` | `boolean` |

#### Returns

`void`

___

### after

▸ **after**(`callback`): [`Out`](Out.md)

Add a callback to be called after rendering the output

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | () => `void` |

#### Returns

[`Out`](Out.md)

___

### apply

▸ **apply**(`this`, ...`messages`): [`Out`](Out.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | [`Out`](Out.md) |
| `...messages` | `any`[] |

#### Returns

[`Out`](Out.md)

#### Overrides

Function.apply

___

### before

▸ **before**(`callback`): [`Out`](Out.md)

Add a callback to be called before rendering the output

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | () => `void` |

#### Returns

[`Out`](Out.md)

___

### call

▸ **call**(...`messages`): [`Out`](Out.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `...messages` | `any`[] |

#### Returns

[`Out`](Out.md)

#### Overrides

Function.call

___

### case

▸ **case**(`type`): [`Out`](Out.md)

Set the case of the messages, applies to all string values given to the final method

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `CaseType` |

#### Returns

[`Out`](Out.md)

___

### clear

▸ **clear**(): [`Out`](Out.md)

Clear the console. Only works in Node.js

#### Returns

[`Out`](Out.md)

___

### clone

▸ **clone**(): `any`

#### Returns

`any`

▸ **clone**(`options`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `Partial`<`OutSettings`\> |

#### Returns

`any`

▸ **clone**(`name`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`any`

▸ **clone**(`name`, `options`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `options` | `Partial`<`OutSettings`\> |

#### Returns

`any`

▸ **clone**(`name?`, `options?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name?` | `string` \| `Partial`<`OutSettings`\> |
| `options?` | `Partial`<`OutSettings`\> |

#### Returns

`any`

___

### config

▸ **config**(`options`): [`Out`](Out.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `Partial`<`OutSettings`\> |

#### Returns

[`Out`](Out.md)

▸ **config**(`option`, `value`): [`Out`](Out.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `option` | keyof `OutSettings` |
| `value` | `boolean` |

#### Returns

[`Out`](Out.md)

___

### disable

▸ **disable**(`exclusions?`): [`Out`](Out.md)

Disable the console. Optional 'exclusions' parameter to allow specific commands

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `exclusions` | `string`[] | `[]` |

#### Returns

[`Out`](Out.md)

___

### enable

▸ **enable**(): [`Out`](Out.md)

Enable the console after it has been disabled

#### Returns

[`Out`](Out.md)

___

### ev

▸ **ev**(`extras_verbosity`): [`Out`](Out.md)

Set verbosity of extra outputs. Default is 1

#### Parameters

| Name | Type |
| :------ | :------ |
| `extras_verbosity` | `number` |

#### Returns

[`Out`](Out.md)

___

### example

▸ **example**(): `void`

#### Returns

`void`

___

### extra

▸ **extra**(...`args`): [`Out`](Out.md)

Add extra outputs with separate verbosity

#### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | `any`[] |

#### Returns

[`Out`](Out.md)

___

### extraVerbosity

▸ **extraVerbosity**(`extras_verbosity?`): [`Out`](Out.md)

Set verbosity of extra outputs

#### Parameters

| Name | Type |
| :------ | :------ |
| `extras_verbosity?` | `number` |

#### Returns

[`Out`](Out.md)

___

### formatter

▸ **formatter**(`callback`): [`Out`](Out.md)

Add a callback to be applied to each line of output

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | (`messages`: `string`) => `string` |

#### Returns

[`Out`](Out.md)

___

### getVerbosity

▸ **getVerbosity**(`name?`): `number`

Get the environment verbosity

#### Parameters

| Name | Type |
| :------ | :------ |
| `name?` | `string` |

#### Returns

`number`

___

### heading

▸ **heading**(`heading`): [`Out`](Out.md)

Set the heading of the messages

#### Parameters

| Name | Type |
| :------ | :------ |
| `heading` | `string` |

#### Returns

[`Out`](Out.md)

___

### isVerbose

▸ **isVerbose**(`level?`): `boolean`

Check if the environment verbosity is >= the given level

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `level` | `number` | `1` |

#### Returns

`boolean`

___

### label

▸ **label**(`label`): [`Out`](Out.md)

Set the label of the messages

#### Parameters

| Name | Type |
| :------ | :------ |
| `label` | `string` |

#### Returns

[`Out`](Out.md)

___

### prefix

▸ **prefix**(`text?`, `verbosity?`): [`Out`](Out.md)

Add a prefix to all future output for this instance

#### Parameters

| Name | Type |
| :------ | :------ |
| `text?` | `string` |
| `verbosity?` | `number` |

#### Returns

[`Out`](Out.md)

___

### rule

▸ **rule**(`symbol?`, `min?`, `max?`): [`Out`](Out.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `symbol?` | `string` |
| `min?` | `number` |
| `max?` | `number` |

#### Returns

[`Out`](Out.md)

___

### setVerbosity

▸ **setVerbosity**(`level?`): [`Out`](Out.md)

Override the environment verbosity level

#### Parameters

| Name | Type |
| :------ | :------ |
| `level?` | `number` |

#### Returns

[`Out`](Out.md)

___

### v

▸ **v**(`verbosity?`): [`Out`](Out.md)

Set the minimum verbosity level

#### Parameters

| Name | Type |
| :------ | :------ |
| `verbosity?` | `number` |

#### Returns

[`Out`](Out.md)

___

### verbosity

▸ **verbosity**(`verbosity?`): [`Out`](Out.md)

Set the minimum verbosity level

#### Parameters

| Name | Type |
| :------ | :------ |
| `verbosity?` | `number` |

#### Returns

[`Out`](Out.md)

___

### write

▸ **write**(...`messages`): [`Out`](Out.md)

Print the output without any extra formatting, useful for the end of chains

#### Parameters

| Name | Type |
| :------ | :------ |
| `...messages` | `any`[] |

#### Returns

[`Out`](Out.md)
