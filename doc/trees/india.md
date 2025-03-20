# Visa Decision Tree for india

```mermaid
flowchart LR
    q1["What is the purpose of your visit to India?"]
    q1 -->|Tourism| q2
    q1 -->|Business| q3
    q1 -->|Medical Treatment| q4
    q1 -->|Study/Research| q5
    q1 -->|Work/Employment| q7
    q1 -->|Joining Family/Spouse| q10
    q1 -->|Conference/Meeting| q3
    q1 -->|Journalism/Media Activity| r8
    q2["How long do you plan to stay in India?"]
    q2 -->|Up to 30 days| q8
    q2 -->|30-90 days| r1
    q2 -->|90 days to 1 year| r1
    q2 -->|More than 1 year| r3
    q3["What is the nature of your business/conference visit?"]
    q3 -->|Business meetings/discussions| q9
    q3 -->|Attending conference/seminar| q9
    q3 -->|Establishing business/industrial venture| r2
    q3 -->|Sale/purchase of industrial/commercial products| q9
    q4["Are you visiting for medical treatment?"]
    q4 -->|Yes, for myself| r4
    q4 -->|Yes, as an attendant/companion| r4
    q4 -->|No, for other reasons| q2
    q5["What type of educational program will you be pursuing?"]
    q5 -->|Regular academic course degree/diploma| q6
    q5 -->|Short-term course less than 6 months| r6
    q5 -->|Research work| r7
    q5 -->|Internship/training program| r6
    q6["Have you secured admission to an Indian educational institution?"]
    q6 -->|Yes, I have a confirmed admission| r5
    q6 -->|No, Im still applying| r9
    q7["What type of employment will you be engaged in?"]
    q7 -->|Working for an Indian company/organization| r10
    q7 -->|Working for a foreign company in India| r10
    q7 -->|Volunteer work unpaid| r12
    q7 -->|Digital nomad/remote work for non-Indian employer| r14
    q8["What is your nationality?"]
    q8 -->|Eligible for eVisa US, UK, Canada, etc.| r1
    q8 -->|Not eligible for eVisa| r15
    q8 -->|Not sure| r16
    q9["How long will your business visit last?"]
    q9 -->|Up to 30 days| q8
    q9 -->|30-180 days| r2
    q9 -->|More than 180 days| r2
    q10["What is your relationship with the person in India?"]
    q10 -->|Spouse of Indian citizen/OCI cardholder| r11
    q10 -->|Child of Indian citizen/OCI cardholder| r11
    q10 -->|Parent of Indian citizen/OCI cardholder| r11
    q10 -->|Other relative not immediate family| r1
    r1(["Tourist Visa / e-Tourist Visa"])
    r2(["Business Visa / e-Business Visa"])
    r3(["Long-Term Tourist Visa"])
    r4(["Medical Visa / Medical Attendant Visa"])
    r5(["Student Visa"])
    r6(["Student Visa Short-term"])
    r7(["Research Visa"])
    r8(["Journalist Visa"])
    r9(["Provisional Student Visa"])
    r10(["Employment Visa"])
    r11(["Entry Visa Family"])
    r12(["Volunteer Visa"])
    r13(["Project Visa"])
    r14(["Not eligible for work visa"])
    r15(["Regular Tourist Visa Non-eVisa Eligible"])
    r16(["Check eVisa Eligibility"])
```
