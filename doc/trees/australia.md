# Visa Decision Tree for australia

flowchart LR
    q1["What is the pri...t to Australia?"]
    q1 -->|Tourism/Holiday| q2
    q1 -->|Work/Business| q3
    q1 -->|Study| q4
    q1 -->|Family/Partner Migration| q5
    q1 -->|Skilled Migration| q6
    q2["How long do you...y in Australia?"]
    q2 -->|Up to 3 months| q7
    q2 -->|3-12 months| q8
    q2 -->|More than 12 months| r19
    q3["What type of wo...g in Australia?"]
    q3 -->|Employer sponsored work| q9
    q3 -->|Working holiday/gap year| q10
    q3 -->|Short-term specialized work| q11
    q3 -->|Business visito... only no work| q7
    q3 -->|Seasonal farm work| r6
    q4["What type of st...be undertaking?"]
    q4 -->|Full-time cours...e than 3 months| r7
    q4 -->|Short course or... than 3 months| q7
    q4 -->|Research as a student| r7
    q4 -->|English language course| r7
    q5["What is your re...tralian person?"]
    q5 -->|Spouse/partner ...manent resident| r8
    q5 -->|Fiancée of Au...manent resident| r9
    q5 -->|Parent of Austr...manent resident| r10
    q5 -->|Child of Austra...manent resident| r11
    q5 -->|Just visiting f...gration intent| q7
    q6["Which skilled m...ou considering?"]
    q6 -->|Points-based in...illed migration| r12
    q6 -->|State/Territory...illed migration| r13
    q6 -->|Skilled employe...sored migration| r14
    q6 -->|Im not sure wh...is right for me| q12
    q7["What is your nationality?"]
    q7 -->|New Zealand citizen| r15
    q7 -->|eVisitor eligib...pean countries| r1
    q7 -->|ETA eligible co... Canada, Japan| r2
    q7 -->|Other country| r3
    q8["Do you plan to ... extended stay?"]
    q8 -->|Yes, I want to ... while visiting| q10
    q8 -->|No, just tourism and leisure| r4
    q9["What is the nat...er sponsorship?"]
    q9 -->|Temporary skill...up to 4 years| r16
    q9 -->|Permanent emplo...nsored position| r14
    q9 -->|Intra-company transfer| r16
    q9 -->|My employer has...sponsorship yet| r17
    q10["Are you eligibl...g Holiday visa?"]
    q10 -->|Yes, Im 18-30 ...ligible country| r5
    q10 -->|No, Im not eligible| q11
    q10 -->|Im not sure| q13
    q11["What type of sh...l you be doing?"]
    q11 -->|Highly specialized work| r18
    q11 -->|Entertainment o...film production| r18
    q11 -->|Sporting event or activity| r18
    q11 -->|Religious work| r18
    q12["What is your occupation?"]
    q12 -->|Healthcare professional| r12
    q12 -->|IT or technology professional| r12
    q12 -->|Skilled trade ...ectrical, etc.| r12
    q12 -->|Other occupation| r12
    q13["What is your co...ry of passport?"]
    q13 -->|UK, Canada, Fra...ny, Italy, etc.| r5
    q13 -->|USA, Japan, South Korea, etc.| r5
    q13 -->|Other country| r17
    r1(["eVisitor subclass 651"])
    r2(["Electronic Trav... subclass 601"])
    r3(["Visitor Visa subclass 600"])
    r4(["Visitor Visa s...Longer Validity"])
    r5(["Working Holiday...ass 417 or 462"])
    r6(["Seasonal Worker... subclass 403"])
    r7(["Student Visa subclass 500"])
    r8(["Partner Visa s...801 or 309/100"])
    r9(["Prospective Mar... subclass 300"])
    r10(["Parent Visa va...ous subclasses"])
    r11(["Child Visa sub...ass 101 or 802"])
    r12(["Skilled Indepen... subclass 189"])
    r13(["Skilled Nominat... subclass 190"])
    r14(["Employer Nomina... subclass 186"])
    r15(["New Zealand Cit... subclass 461"])
    r16(["Temporary Skill... subclass 482"])
    r17(["No specific wor...out sponsorship"])
    r18(["Temporary Activ... subclass 408"])
    r19(["No specific lon...rm tourist visa"])
    r20(["Visitor Visa fo... Family Stream"])

