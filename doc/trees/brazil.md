# Visa Decision Tree for brazil

flowchart LR
    q1["What is the mai...isit to Brazil?"]
    q1 -->|Tourism/Leisure| q2
    q1 -->|Business| q3
    q1 -->|Work| q4
    q1 -->|Study| q5
    q1 -->|Visiting Family/Friends| q2
    q1 -->|Scientific Rese...emic Activities| q6
    q1 -->|Religious/Volunteer Activities| q7
    q1 -->|Immigration/Per...anent Residence| q8
    q2["How long do you...stay in Brazil?"]
    q2 -->|Up to 90 days| q9
    q2 -->|More than 90 days| r9
    q2 -->|Multiple visits over a year| r9
    q3["What type of bu... be conducting?"]
    q3 -->|Meetings, confe..., or networking| q9
    q3 -->|Contract signin...ss negotiations| q9
    q3 -->|Market research or site visits| q9
    q3 -->|Installing or s...icing equipment| r2
    q3 -->|Paid activities... just meetings| q4
    q4["What type of wo...oing in Brazil?"]
    q4 -->|Employment with...azilian company| r2
    q4 -->|Technical assis...cialized skills| r3
    q4 -->|Cultural or performing arts| r4
    q4 -->|Journalism or media work| r5
    q4 -->|Professional sports| r6
    q4 -->|Work for religi...us organization| r7
    q5["What type of st...u be attending?"]
    q5 -->|Short course l...s than 90 days| q9
    q5 -->|Regular academi...e than 90 days| r8
    q5 -->|Exchange program| r8
    q5 -->|Internship rela...to your studies| r8
    q5 -->|Portuguese language course| r8
    q6["What type of sc... be conducting?"]
    q6 -->|Short-term rese...s than 90 days| q9
    q6 -->|Long-term research project| r10
    q6 -->|Academic confer...ces or meetings| q9
    q6 -->|Teaching or lec...ian institution| r11
    q7["What religious ... be conducting?"]
    q7 -->|Short-term miss...s than 90 days| q9
    q7 -->|Long-term relig...work or mission| r7
    q7 -->|Volunteer work ...al organization| r12
    q7 -->|Just attending ...ts as a visitor| q9
    q8["What is your ba...ence in Brazil?"]
    q8 -->|Family reunion ...n spouse/child| r13
    q8 -->|Retirement| r14
    q8 -->|Investment in Brazil| r15
    q8 -->|Professional sk...mployment offer| r16
    q8 -->|Refugee or huma...itarian reasons| r17
    q9["What is your nationality?"]
    q9 -->|Visa-exempt cou...nada, EU, etc.| r1
    q9 -->|Visa-required country| r18
    q9 -->|MERCOSUR countr... Uruguay, etc.| r19
    q9 -->|Not sure if I need a visa| r20
    r1(["Visa Exemption ...isa-Free Entry"])
    r2(["Work Visa VITEM V"])
    r3(["Technical Assis... Visa VITEM V"])
    r4(["Cultural/Perfor... Visa VITEM I"])
    r5(["Journalist Visa VITEM I"])
    r6(["Athlete Visa VITEM V"])
    r7(["Religious/Missi... Visa VITEM V"])
    r8(["Student Visa VITEM IV"])
    r9(["Visitor Visa VIVIS"])
    r10(["Research Visa VITEM I"])
    r11(["Professor/Acade... Visa VITEM V"])
    r12(["Volunteer Visa VITEM I"])
    r13(["Family Reunific...Visa VITEM XI"])
    r14(["Retirement Visa VITEM XIV"])
    r15(["Investment Visa VITEM V"])
    r16(["Permanent Work Visa"])
    r17(["Humanitarian Vi.../Refugee Status"])
    r18(["Tourist Visa Ap...ication Process"])
    r19(["MERCOSUR Residence Agreement"])
    r20(["Visa Requirement Check"])

