# Visa Decision Tree for thai

flowchart LR
    q1["What is the pri...it to Thailand?"]
    q1 -->|Tourism/Leisure| q2
    q1 -->|Business/Work| q3
    q1 -->|Education/Study| q4
    q1 -->|Retirement| q5
    q1 -->|Medical Treatment| q6
    q1 -->|Visiting Family/Friends| q2
    q2["How long do you...ay in Thailand?"]
    q2 -->|Less than 30 days| q7
    q2 -->|30-60 days| q8
    q2 -->|61-90 days| q9
    q2 -->|More than 90 days| q10
    q3["What type of bu... be conducting?"]
    q3 -->|Meetings/Conferences| q11
    q3 -->|Paid Work/Employment| q12
    q3 -->|Business Negotiation| q11
    q3 -->|Investment Activities| q13
    q3 -->|Digital Nomad/Remote Work| q14
    q4["What type of ed...u be attending?"]
    q4 -->|University Degree Program| q15
    q4 -->|Language School| q15
    q4 -->|Short-term Cour...s than 90 days| q16
    q4 -->|Internship| q17
    q5["Are you 50 years or older?"]
    q5 -->|Yes| q18
    q5 -->|No| r19
    q6["How long will y...treatment take?"]
    q6 -->|Less than 30 days| q20
    q6 -->|30-90 days| q21
    q6 -->|More than 90 days| q22
    q7["What is your nationality?"]
    q7 -->|From visa exemp... EU, Australia| r1
    q7 -->|From visa-on-ar..., India, China| r2
    q7 -->|Other nationality| r3
    q8["Do you want to ...initial period?"]
    q8 -->|Yes| q23
    q8 -->|No, just the initial period| q7
    q9["Are you plannin...ring your stay?"]
    q9 -->|Yes, Ill be le...and re-entering| r4
    q9 -->|No, just one continuous stay| r5
    q10["Do you have the... extended stay?"]
    q10 -->|Yes, I can show proof of funds| q24
    q10 -->|No/Not sure| r6
    q11["How long will y...ctivities take?"]
    q11 -->|Less than 15 days| q7
    q11 -->|15-90 days| r7
    q11 -->|More than 90 days| r8
    q12["Do you have a j... Thai employer?"]
    q12 -->|Yes, with work ...mit sponsorship| r9
    q12 -->|No| r10
    q13["What type of in...e you planning?"]
    q13 -->|Thailand Board ...pproved project| r11
    q13 -->|Real estate investment| q25
    q13 -->|Business investment/startup| r8
    q14["Are you eligibl...ent LTR visa?"]
    q14 -->|Yes, I meet the...stment criteria| r12
    q14 -->|No/Not sure| r13
    q15["How long is you...tional program?"]
    q15 -->|Less than 90 days| r14
    q15 -->|90 days to 1 year| r15
    q15 -->|More than 1 year| r15
    q16["Is your course ...on in Thailand?"]
    q16 -->|Yes| r14
    q16 -->|No/Not sure| r3
    q17["Is your interns...paid or unpaid?"]
    q17 -->|Paid internship| r9
    q17 -->|Unpaid internship| r15
    q18["Do you meet the...etirement visa?"]
    q18 -->|Yes| r16
    q18 -->|No/Not sure| r17
    q20["Will you receiv...ified hospital?"]
    q20 -->|Yes, at a certified hospital| q7
    q20 -->|No/Not sure| r3
    q21["Do you have con... Thai hospital?"]
    q21 -->|Yes| r18
    q21 -->|No| r3
    q22["Do you have con... Thai hospital?"]
    q22 -->|Yes| r18
    q22 -->|No| r3
    q23["Can you leave t...long-term visa?"]
    q23 -->|Yes, I can exit and re-enter| r5
    q23 -->|No, I prefer to...within Thailand| r20
    q24["Are you plannin...ring your stay?"]
    q24 -->|Yes| q3
    q24 -->|No, just for living/retirement| r21
    q25["Is your investm...on THB or more?"]
    q25 -->|Yes| r22
    q25 -->|No| r13
    r1(["Visa Exemption"])
    r2(["Visa On Arrival"])
    r3(["Tourist Visa Single Entry"])
    r4(["Tourist Visa Multiple Entry"])
    r5(["Tourist Visa S... with Extension"])
    r6(["Tourist Visa with Limited Stay"])
    r7(["Non-Immigrant B...- Single Entry"])
    r8(["Non-Immigrant B...Multiple Entry"])
    r9(["Non-Immigrant B Visa Work"])
    r10(["SMART Visa"])
    r11(["Board of Invest... Promoted Visa"])
    r12(["Long-Term Resident LTR Visa"])
    r13(["Non-Immigrant O...tiple Purposes"])
    r14(["Tourist Visa E...n/Short Course"])
    r15(["Non-Immigrant E...isa Education"])
    r16(["Non-Immigrant O...etirement Visa"])
    r17(["Non-Immigrant O...etirement Base"])
    r18(["Non-Immigrant O...Treatment Visa"])
    r19(["No Retirement Visa Available"])
    r20(["Tourist Visa with Extension"])
    r21(["Thailand Elite Visa"])
    r22(["Investment Visa...on-Immigrant B"])

