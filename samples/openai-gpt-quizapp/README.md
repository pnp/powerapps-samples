# Quiz App using OpenAI ChatGPT


The app uses the [OpenAI GPT (Independent Publisher)](https://learn.microsoft.com/en-us/connectors/openaigpt4ip/).

This was inspired from [Add OpenAI Capabilities to your Power Platform solutions](https://www.youtube.com/watch?v=AVK7BUmTGvs&t=1062s) by [Robin Rosengrün](https://twitter.com/power_r2) to build a simple quiz app.

## Applies to

* [Microsoft Power Apps](https://docs.microsoft.com/powerapps/)

## Compatibility

![Power Apps Source File Pack and Unpack Utility 0.20](https://img.shields.io/badge/Packing%20Tool-0.20-green.svg)
![Premium License](https://img.shields.io/badge/Premium%20License-Not%20Required-green.svg "Premium Power Apps license not required")
![Experimental Features](https://img.shields.io/badge/Experimental%20Features-No-green.svg "Does not rely on experimental features")
![On-Premises Connectors](https://img.shields.io/badge/On--Premises%20Connectors-No-green.svg "Does not use on-premise connectors")
![Custom Connectors](https://img.shields.io/badge/Custom%20Connectors-Not%20Required-green.svg "Does not use custom connectors")

## Authors

Solution|Author(s)
--------|---------
GPT-3 quizapp | [Reshmee Auckloo](https://github.com/reshmee011) ([@reshmeeauckloo](https://twitter.com/reshmeeauckloo))

## Version history

Version|Date|Comments
-------|----|--------
1.0|October 01st, 2023|Initial release

## Features

The request sent to OpenAI GPT is

```JSON
Set(varResponse, 'OpenAIGPT(IndependentPublisher)'.CompletionPost("text-davinci-003",{prompt:txtPrompt.Text & Char(10) & "Topic: " & txtTopic.Text,max_tokens:4000,temperature:0.7,top_p:1,n:1}).first_completion);
```

Please find more info on the different parameters from [OpenAI GPT (Independent Publisher)](https://learn.microsoft.com/en-us/connectors/openaigpt4ip/).

The prompt used to send to chatGPT is "Generate a JSON dataset of 10 pub quiz questions. Provide each question entry in proper JSON format with a 'question' field, an 'options' field consisting of an array of 4 possible answers. Additionally, ensure that each option includes an 'answer' field with the text of the option, a 'selected' field initialized to false indicating whether the option has been chosen, and a 'correct' field indicating whether the answer is correct"


The sample data returned is the format 

```JSON
[
    {
        "question": "What is the capital of France?",
        "options": [
            {"Answer": "Berlin", "Selected": false, "Correct": false},
            {"Answer": "Madrid", "Selected": false, "Correct": false},
            {"Answer": "Rome", "Selected": false, "Correct": false},
            {"Answer": "Paris", "Selected": false, "Correct": true}
        ]
    },
    {
        "question": "Which planet is known as the 'Red Planet'?",
        "options": [
            {"Answer": "Venus", "Selected": false, "Correct": false},
            {"Answer": "Mars", "Selected": false, "Correct": true},
            {"Answer": "Jupiter", "Selected": false, "Correct": false},
            {"Answer": "Saturn", "Selected": false, "Correct": false}
        ]
    },
    {
        "question": "Who wrote the play 'Romeo and Juliet'?",
        "options": [
            {"Answer": "William Shakespeare", "Selected": false, "Correct": true},
            {"Answer": "Charles Dickens", "Selected": false, "Correct": false},
            {"Answer": "Jane Austen", "Selected": false, "Correct": false},
            {"Answer": "Mark Twain", "Selected": false, "Correct": false}
        ]
    },
    {
        "question": "What is the chemical symbol for water?",
        "options": [
            {"Answer": "O2", "Selected": false, "Correct": false},
            {"Answer": "H2O", "Selected": false, "Correct": true},
            {"Answer": "CO2", "Selected": false, "Correct": false},
            {"Answer": "CH4", "Selected": false, "Correct": false}
        ]
    },
    {
        "question": "In which year did the Titanic sink?",
        "options": [
            {"Answer": "1905", "Selected": false, "Correct": false},
            {"Answer": "1912", "Selected": false, "Correct": true},
            {"Answer": "1920", "Selected": false, "Correct": false},
            {"Answer": "1931", "Selected": false, "Correct": false}
        ]
    },
    {
        "question": "What is the largest mammal on Earth?",
        "options": [
            {"Answer": "Elephant", "Selected": false, "Correct": false},
            {"Answer": "Blue Whale", "Selected": false, "Correct": true},
            {"Answer": "Lion", "Selected": false, "Correct": false},
            {"Answer": "Giraffe", "Selected": false, "Correct": false}
        ]
    },
    {
        "question": "Who painted the Mona Lisa?",
        "options": [
            {"Answer": "Vincent van Gogh", "Selected": false, "Correct": false},
            {"Answer": "Pablo Picasso", "Selected": false, "Correct": false},
            {"Answer": "Leonardo da Vinci", "Selected": false, "Correct": true},
            {"Answer": "Michelangelo", "Selected": false, "Correct": false}
        ]
    },
    {
        "question": "What is the chemical symbol for gold?",
        "options": [
            {"Answer": "Ag", "Selected": false, "Correct": false},
            {"Answer": "Au", "Selected": false, "Correct": true},
            {"Answer": "Fe", "Selected": false, "Correct": false},
            {"Answer": "Cu", "Selected": false, "Correct": false}
        ]
    },
    {
        "question": "Which country is known as the Land of the Rising Sun?",
        "options": [
            {"Answer": "China", "Selected": false, "Correct": false},
            {"Answer": "Japan", "Selected": false, "Correct": true},
            {"Answer": "South Korea", "Selected": false, "Correct": false},
            {"Answer": "Thailand", "Selected": false, "Correct": false}
        ]
    },
    {
        "question": "Who was the first man to step on the moon?",
        "options": [
            {"Answer": "Buzz Aldrin", "Selected": false, "Correct": false},
            {"Answer": "Yuri Gagarin", "Selected": false, "Correct": false},
            {"Answer": "Neil Armstrong", "Selected": false, "Correct": true},
            {"Answer": "John Glenn", "Selected": false, "Correct": false}
        ]
    }
]
```

ParseJson function has been used to convert the JSON response into a table to bind to a gallery control. 

Each time the generate button is clicked, random set of questions is generated based on the specified topic.

Watch the app in action

![QuizApp](./QuizApp.gif)

## Prerequisites

You'll need an OpenAI API key. You can obtain one by visiting [OpenAI's API key page](https://platform.openai.com/account/api-keys) and creating a new secret key. Keep in mind that if you're using a free account, you might encounter a quota error ("You exceeded your current quota, please check your plan and billing details").

## Data Sources

No datasource needed.

## Minimal Path to Awesome

* [Download](./solution/quiz app.msapp) the `.msapp` from the `solution` folder
* Within **Power Apps Studio**, use the `.msapp` file using **File** > **Open** > **Browse** and select the `.msapp` file you just downloaded.
* Select the **Data** tab

## Using the Source Code

You can also use the [Power Apps CLI](https://docs.microsoft.com/powerapps/developer/data-platform/powerapps-cli) to pack the source code by following these steps::

* Clone the repository to a local drive
* Pack the source files back into `.msapp` file:
  ```bash
  pac canvas pack --sources pathtosourcefolder --msapp pathtomsapp
  ```
  Making sure to replace `pathtosourcefolder` to point to the path to this sample's `sourcecode` folder, and `pathtomsapp` to point to the path of this solution's `.msapp` file (located under the `solution` folder)
* Within **Power Apps Studio**, use the `.msapp` file using **File** > **Open** > **Browse** and select the `.msapp` file you just packed.

## Disclaimer

**THIS CODE IS PROVIDED *AS IS* WITHOUT WARRANTY OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING ANY IMPLIED WARRANTIES OF FITNESS FOR A PARTICULAR PURPOSE, MERCHANTABILITY, OR NON-INFRINGEMENT.**

## Help

We do not support samples, but we this community is always willing to help, and we want to improve these samples. We use GitHub to track issues, which makes it easy for  community members to volunteer their time and help resolve issues.

If you encounter any issues while using this sample, you can [create a new issue](https://github.com/pnp/powerapps-samples/issues/new?assignees=&labels=Needs%3A+Triage+%3Amag%3A%2Ctype%3Abug-suspected&template=bug-report.yml&sample=YOURSAMPLENAME&authors=@YOURGITHUBUSERNAME&title=YOURSAMPLENAME%20-%20).

For questions regarding this sample, [create a new question](https://github.com/pnp/powerapps-samples/issues/new?assignees=&labels=Needs%3A+Triage+%3Amag%3A%2Ctype%3Abug-suspected&template=question.yml&sample=YOURSAMPLENAME&authors=@YOURGITHUBUSERNAME&title=YOURSAMPLENAME%20-%20).

Finally, if you have an idea for improvement, [make a suggestion](https://github.com/pnp/powerapps-samples/issues/new?assignees=&labels=Needs%3A+Triage+%3Amag%3A%2Ctype%3Abug-suspected&template=suggestion.yml&sample=YOURSAMPLENAME&authors=@YOURGITHUBUSERNAME&title=YOURSAMPLENAME%20-%20).

## For more information

- [Overview of creating apps in Power Apps](https://docs.microsoft.com/powerapps/maker/)
- [Power Apps canvas apps documentation](https://docs.microsoft.com/en-us/powerapps/maker/canvas-apps/)


<img src="https://telemetry.sharepointpnp.com/powerapps-samples/samples/readme-template" />


