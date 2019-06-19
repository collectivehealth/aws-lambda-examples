<!-- CH Repo Tracking Data version 1.0.2 -->
|     Category     |         Value         |
| ---------------: | --------------------- |
| **Repo Status**  | delete |
| **Language**     | JavaScript          |
| **Repo Owner**   |   |
<!-- If you use any of the following fields, please delete "Repo Owner", above,
     as it then becomes ambiguous.  If you add fields, please update the script
     at walker-github-ranger. -->
<!--
| **Repo PoC**     | <One or more humans>  |
| **Repo Oncall**  | <Link to PagerDuty>   |
| **Repo Team Owner** | <Name of owning team> |
-->


# aws-lambda-examples

Samples for AWS Lambda Functions

## Getting started

### Install APEX

```
latest=$(curl -s https://api.github.com/repos/apex/apex/tags | grep name | head -n 1 | sed 's/[," ]//g' | cut -d ':' -f 2)
curl -sL https://github.com/apex/apex/releases/download/$latest/apex_darwin_amd64 -o /usr/local/bin/apex
chmod +x $_
```

### Install Node Modules

```
npm install
```

### APEX Deploy

```
AWS_ACCESS_KEY=access_key_here AWS_SECRET_KEY=secret_key_here AWS_REGION=us-east-1 apex deploy FunctionName
```

### APEX Invoke

```
AWS_ACCESS_KEY=access_key_here AWS_SECRET_KEY=secret_key_here AWS_REGION=us-east-1 apex invoke FunctionName
```

#### With a payload

```
AWS_ACCESS_KEY=access_key_here AWS_SECRET_KEY=secret_key_here AWS_REGION=us-east-1 apex invoke FunctionName < /path/to/input.json
```

## Developing

1. Deployment/Running is provided by [https://github.com/apex/apex]
1. API functions are in [Functions](./functions)
1. Dependencies are declared in [The Package File](./package.json)
1. Build instructions for all methods and instructions for APEX are declared in [The APEX Project File](./project.json)
1. Code base is NodeJS

### Development Workflow

1. Make changes to your function
1. Invoke an `apex deploy FunctionName` (See above)
1. Invoke an `apex invoke FunctionName` (See above)
1. Check logs by executing an `apex logs FunctionName`
    1. Logs can be followed in a second screen by doing `apex logs -f FunctionName`
