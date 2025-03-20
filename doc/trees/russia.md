# Visa Decision Tree for russia

flowchart LR
    q1["What is the mai...isit to Russia?"]
    q1 -->|Tourism| q2
    q1 -->|Business| q3
    q1 -->|Work| q4
    q1 -->|Study| q5
    q1 -->|Family Visit| q6
    q1 -->|Transit| q13
    q1 -->|Humanitarian/Cultural| q7
    q2["How long do you...stay in Russia?"]
    q2 -->|Up to 8 days S...-visa eligible| q9
    q2 -->|Up to 16 days ...-visa eligible| q9
    q2 -->|Up to 8 days F...-visa eligible| q9
    q2 -->|Up to 30 days| q8
    q2 -->|More than 30 days| r9
    q3["What type of bu... be conducting?"]
    q3 -->|Meetings and negotiations| q8
    q3 -->|Conferences or ...ade exhibitions| q8
    q3 -->|Contract signin...ial discussions| q8
    q3 -->|Assembly or rep...om your company| q8
    q3 -->|Providing servi...uire work visa| q4
    q4["What kind of wo...oing in Russia?"]
    q4 -->|Regular employm...Russian company| r2
    q4 -->|Highly Qualifie...pecialist HQS| r3
    q4 -->|Work for a fore... Russian branch| r2
    q4 -->|Teaching or res...nal institution| r4
    q4 -->|Journalism or media activities| r5
    q5["What type of ed...u be attending?"]
    q5 -->|Full-time degree program| r6
    q5 -->|Language course... than 3 months| r7
    q5 -->|Academic exchange program| r6
    q5 -->|Scientific or r...search activity| r8
    q6["What is your re...ting in Russia?"]
    q6 -->|Close family me..., parent, etc.| q11
    q6 -->|Other relative or friend| q8
    q7["What is the nat...cultural visit?"]
    q7 -->|Cultural exchan... or performance| r10
    q7 -->|Religious activity| r10
    q7 -->|Humanitarian ai... volunteer work| r10
    q7 -->|Attending a sporting event| q8
    q8["Do you have a l...a Russian host?"]
    q8 -->|Yes, from a Rus...agency or hotel| r1
    q8 -->|Yes, from a Rus...or organization| r11
    q8 -->|No, I dont hav... invitation yet| r12
    q9["Which region of...with an e-visa?"]
    q9 -->|Saint Petersbur...eningrad Region| q10
    q9 -->|Kaliningrad Region| q10
    q9 -->|Far East Region...amchatka, etc.| q10
    q9 -->|Other regions n...vered by e-visa| q8
    q10["Is your nationa...Russian e-visa?"]
    q10 -->|Yes, my country...a eligible list| r13
    q10 -->|No, my country is not eligible| q8
    q10 -->|Im not sure| r14
    q11["Is your Russian...anent resident?"]
    q11 -->|Yes, Russian citizen| q12
    q11 -->|Yes, permanent ...ident of Russia| q12
    q11 -->|No, they are on...emporary status| q8
    q12["Do you plan to ...ence in Russia?"]
    q12 -->|Yes, long-term ...ntial residence| r15
    q12 -->|No, just visiting| r16
    q13["How long will y...ough Russia be?"]
    q13 -->|Less than 24 ho...al airport area| r17
    q13 -->|Up to 10 days, ...rt transit area| r18
    r1(["Tourist Visa"])
    r2(["Work Visa"])
    r3(["Highly Qualifie...HQS Work Visa"])
    r4(["Work Visa Educ...fic Activities"])
    r5(["Journalist Visa"])
    r6(["Student Visa"])
    r7(["Short-term Stud...st or Business"])
    r8(["Scientific-Technical Visa"])
    r9(["Long-term Touri...Multiple Entry"])
    r10(["Humanitarian Visa"])
    r11(["Business Visa"])
    r12(["How to Obtain a...itation/Support"])
    r13(["Electronic Visa e-visa"])
    r14(["E-visa Eligibility Check"])
    r15(["Private Visa F... Reunification"])
    r16(["Tourist or Private Visit Visa"])
    r17(["Airport Transit... Visa Required"])
    r18(["Transit Visa"])

