# Visa Decision Tree for japan

```mermaid
flowchart LR
    q1["What is the pri...visit to Japan?"]
    q1 -->|Tourism/Leisure| q2
    q1 -->|Business/Conference| q3
    q1 -->|Work/Employment| q4
    q1 -->|Study/Research| q5
    q1 -->|Visiting Family/Friends| q6
    q1 -->|Cultural Activities/Exchange| q7
    q1 -->|Transit Through Japan| q8
    q1 -->|Medical Treatment| r15
    q2["How long do you...n as a tourist?"]
    q2 -->|Up to 90 days| q9
    q2 -->|More than 90 days| r14
    q3["What business a... be conducting?"]
    q3 -->|Meetings, confe...usiness liaison| q9
    q3 -->|Contract signin...t surveys, etc.| q9
    q3 -->|Paid activities/actual work| q4
    q4["What type of wo...doing in Japan?"]
    q4 -->|Highly-skilled professional| r1
    q4 -->|Engineer/specia...tional services| r2
    q4 -->|Intra-company transferee| r3
    q4 -->|Professor/instructor| r4
    q4 -->|Artist/entertainer| r5
    q4 -->|Technical intern training| r6
    q4 -->|Specified Skilled Worker| r7
    q4 -->|Other work category| r8
    q5["What type of st... be conducting?"]
    q5 -->|University degree program| r9
    q5 -->|Japanese language school| r10
    q5 -->|Short-term stud...s than 90 days| q9
    q5 -->|Research activi... at institution| r11
    q5 -->|Cultural traini...ial arts, etc.| r12
    q6["What is your re...iting in Japan?"]
    q6 -->|Spouse/child of...panese national| r13
    q6 -->|Spouse/child of...manent resident| r13
    q6 -->|Parent of Japanese national| r13
    q6 -->|Other family me...d short visit| q9
    q6 -->|Long-term famil...e than 90 days| r14
    q7["What cultural a...rticipating in?"]
    q7 -->|Short-term cult...s than 90 days| q9
    q7 -->|Learning tradit...se culture/arts| r12
    q7 -->|Unpaid cultural...mances/exchange| q9
    q7 -->|Paid performances/activities| r5
    q8["How long will y...rough Japan be?"]
    q8 -->|Less than 72 ho...rt transit area| r16
    q8 -->|Less than 72 ho...ransit tourism| q10
    q8 -->|More than 72 hours| q9
    q9["What is your nationality?"]
    q9 -->|Visa exemption ... US, EU, etc.| r17
    q9 -->|Non-visa exemption country| r18
    q9 -->|Not sure about ...xemption status| r19
    q10["What is your na...ansit purposes?"]
    q10 -->|Visa exemption ...reement country| r17
    q10 -->|Non-visa exempt...ass eligibility| r20
    q10 -->|Country requiring transit visa| r21
    r1(["Highly-Skilled ...ofessional Visa"])
    r2(["Engineer/Specia...l Services Visa"])
    r3(["Intra-Company Transferee Visa"])
    r4(["Professor Visa"])
    r5(["Artist/Entertainer Visa"])
    r6(["Technical Intern Training Visa"])
    r7(["Specified Skilled Worker Visa"])
    r8(["Other Work Visa Categories"])
    r9(["Student Visa C...ege/University"])
    r10(["Student Visa Language School"])
    r11(["Researcher Visa"])
    r12(["Cultural Activities Visa"])
    r13(["Spouse or Child...e National Visa"])
    r14(["Long-Term Stay Visa"])
    r15(["Medical Stay Visa"])
    r16(["Transit Without Visa"])
    r17(["Visa Exemption/Visa Waiver"])
    r18(["Temporary Visit...hort-term Stay"])
    r19(["Visa Exemption ...igibility Check"])
    r20(["Shore Pass Lan...ing Permission"])
    r21(["Transit Visa"])
```
