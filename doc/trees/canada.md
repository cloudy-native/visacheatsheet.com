# Visa Decision Tree for canada

flowchart LR
    q1["What is the mai...isit to Canada?"]
    q1 -->|Tourism/Visit| q2
    q1 -->|Study| q3
    q1 -->|Work| q4
    q1 -->|Immigration/Per...anent Residence| q5
    q1 -->|Business| q6
    q1 -->|Transit through Canada| q12
    q1 -->|Family Reunification| q7
    q2["How long do you...stay in Canada?"]
    q2 -->|Less than 6 months| q8
    q2 -->|More than 6 months| r6
    q3["What is the len... study program?"]
    q3 -->|Less than 6 months| q9
    q3 -->|More than 6 months| r2
    q4["What type of wo...oing in Canada?"]
    q4 -->|Temporary work ...fic work permit| r3
    q4 -->|Open work permit| r4
    q4 -->|International E...orking Holiday| r5
    q4 -->|Business visito... permit needed| q6
    q4 -->|Not sure what w...k permit I need| r12
    q5["Which immigrati... interested in?"]
    q5 -->|Express Entry ...perience Class| r7
    q5 -->|Provincial Nomi...e Program PNP| r8
    q5 -->|Family Sponsorship| r9
    q5 -->|Start-up Visa Program| r10
    q5 -->|Self-employed Persons Program| r11
    q5 -->|Not sure which program fits me| r13
    q6["What type of bu...ll you conduct?"]
    q6 -->|Attending meeti... or conferences| q8
    q6 -->|Site visits or ...s consultations| q8
    q6 -->|Training at Can...under 6 months| q8
    q6 -->|Buying Canadian...ods or services| q8
    q6 -->|Direct work for... company/client| r3
    q7["What is your re...rson in Canada?"]
    q7 -->|Spouse/Partner ...manent resident| r14
    q7 -->|Parent/Grandpar...manent resident| r15
    q7 -->|Child of Canadi...manent resident| r16
    q7 -->|Other family relationship| r17
    q7 -->|Just visiting f...ot immigrating| q8
    q8["What is your citizenship?"]
    q8 -->|U.S. citizen| r18
    q8 -->|Visa-exempt cou...ustralia, etc.| r1
    q8 -->|Visa-required country| r19
    q8 -->|Not sure if I need a visa| r20
    q9["What is your ci...ort-term study?"]
    q9 -->|U.S. citizen| r21
    q9 -->|Visa-exempt cou...ustralia, etc.| r22
    q9 -->|Visa-required country| r23
    q10["Do you intend t...ying in Canada?"]
    q10 -->|Yes, on-campus only| r24
    q10 -->|Yes, on and off-campus| r24
    q10 -->|Yes, co-op/inte...t of my program| r25
    q10 -->|No| r2
    q11["Have you receiv...adian employer?"]
    q11 -->|Yes, with LMIA approval| r3
    q11 -->|Yes, LMIA-exemp...onal agreements| r26
    q11 -->|Yes, intra-company transfer| r27
    q11 -->|No offer yet| r28
    q12["Will you leave ...through Canada?"]
    q12 -->|No, staying in ...al transit area| q13
    q12 -->|Yes, will exit the airport| q8
    q13["What is your ci...or the transit?"]
    q13 -->|U.S. citizen| r29
    q13 -->|Transit without...ble citizenship| r30
    q13 -->|Visa-required c...ut Visa Program| r31
    r1(["Electronic Trav...orization eTA"])
    r2(["Study Permit"])
    r3(["Employer-Specific Work Permit"])
    r4(["Open Work Permit"])
    r5(["International E...orking Holiday"])
    r6(["Temporary Resid...g Stay Visitor"])
    r7(["Express Entry"])
    r8(["Provincial Nomi...e Program PNP"])
    r9(["Family Sponsorship"])
    r10(["Start-up Visa Program"])
    r11(["Self-employed Persons Program"])
    r12(["Work Permit Pathways Overview"])
    r13(["Immigration Pathway Finder"])
    r14(["Spousal/Partner Sponsorship"])
    r15(["Parents and Gra...nts Sponsorship"])
    r16(["Child Sponsorship"])
    r17(["Other Family Sponsorship"])
    r18(["U.S. Citizens Visitor Entry"])
    r19(["Temporary Resid... Visitor Visa"])
    r20(["Visitor Visa Eligibility Check"])
    r21(["Short-term Stud...r U.S. Citizens"])
    r22(["Short-term Study with eTA"])
    r23(["Short-term Stud...th Visitor Visa"])
    r24(["Student Work Program"])
    r25(["Co-op Work Permit"])
    r26(["CUSMA/NAFTA Pro...nal Work Permit"])
    r27(["Intra-Company T...fer Work Permit"])
    r28(["Job Search Information"])
    r29(["Transit for U.S. Citizens"])
    r30(["Transit Without Visa Program"])
    r31(["Transit Visa"])
    r32(["Super Visa for ...nd Grandparents"])

