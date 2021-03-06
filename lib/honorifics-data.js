var h = {
    "prefix": {
        "Mr.": ["mr", "mister", "master"],
        "Mrs.": ["mrs", "missus", "missis"],
        "Ms.": ["ms", "miss"],
        "Dr.": ["dr"],
        "Rev.": ["rev", "rev'd", "reverend"],
        "Fr.": ["fr", "father"],
        "Sr.": ["sr", "sister"],
        "Prof.": ["prof", "professor"],
        "Sir": ["sir"],
        "Hon.": ["honorable"],
        "Pres.": ["president"],
        "Gov": ["governor", "governer"],
        "Ofc": ["officer"],
        "Msgr": ["monsignor"],
        "Sr.": ["sister"],
        "Br.": ["brother"],
        "Supt.": ["superintendent"],
        "Rep.": ["representatitve"],
        "Sen.": ["senator"],
        "Amb.": ["ambassador"],
        "Treas.": ["treasurer"],
        "Sec.": ["secretary"],
        "Pvt.": ["private"],
        "Cpl.": ["corporal"],
        "Sgt.": ["sargent"],
        "Adm.": ["administrative", "administrator", "administrater"],
        "Maj.": ["major"],
        "Capt.": ["captain"],
        "Cmdr.": ["commander"],
        "Lt.": ["lieutenant"],
        "Lt. Col.": ["lieutenant colonel"],
        "Col.": ["colonel"],
        "Gen.": ["general"],
        "Bc.": ["bachelor", "baccalaureus"],
        "BcA.": ["bachelor of arts", "baccalaureus artis"],
        "ICDr.": ["doctor of canon law", "juris cononici doctor"],
        "Ing.": ["engineer", "ingenieur"],
        "Ing. sheet.": ["architect engineer", "intrudes upon architectus"],
        "JUDr.": ["juris doctor utriusque", "doctor rights"],
        "MDDr.": ["doctor of dental medicine", "medicinae doctor dentium"],
        "MgA.": ["master of arts", "magister artis"],
        "Mgr.": ["master"],
        "MD.": ["doctor of general medicine"],
        "DVM.": ["doctor of veterinary medine"],
        "PaedDr.": ["doctor of education"],
        "PharmDr.": ["doctor of pharmacy"],
        "PhDr.": ["doctor of philosophy"],
        "PhMr.": ["master of pharmacy"],
        "RCDr.": ["doctor of business studies"],
        "RNDr.": ["doctor of science"],
        "DSc.": ["doctor of science"],
        "RSDr.": ["doctor of socio-political sciences"],
        "RTDr.": ["doctor of technical sciences"],
        "ThDr.": ["doctor of theology"],
        "Th.D.": ["doctor of theology"],
        "ThLic.": ["licentiate of theology"],
        "ThMgr.": ["master of theology", "master of divinity"],
        "Acad.": ["academian", "academic"],
        "ArtD.": ["doctor of arts"],
        "DiS.": ["certified specialist"],
        "As.": ["assistant"],
        "Odb. As.": ["assistant professor"],
        "Doc.": ["associate professor"]
    },
    "compound": ["da", "de", "del", "della", "dem", "den", "der", "di", "du", "het", "la", "onder", "op", "pietro", "st.", "st", "\"t", "ten", "ter", "van", "vanden", "vere", "von"],
    "lineage": ["I", "II", "III", "IV", "V", "1st", "2nd", "3rd", "4th", "5th", "Senior", "Junior", "Jr", "Sr"],
    "suffixes": {
        "prof": ["AO", "B.A.", "M.Sc", "BCompt", "PhD", "Ph.D.", "APR", "RPh", "PE", "MD", "M.D.", "MA", "DMD", "CME", "BSc", "Bsc", "BSc(hons]", "Ph.D.", "BEng", "M.B.A.", "MBA", "FAICD", "CM", "OBC", "M.B.", "ChB", "FRCP", "FRSC", "FREng", "Esq", "MEng", "MSc", "J.D.", "JD", "BGDipBus", "Dip", "Dipl.Phys", "M.H.Sc.", "MPA", "B.Comm", "B.Eng", "B.Acc", "FSA", "PGDM", "FCPA", "RN", "R.N.", "MSN", "PCA", "PCCRM", "PCFP", "PCGD", "PCHR", "PCM", "PCPS", "PCPM", "PCSCM", "PCSM", "PCMM", "PCTC", "ACA", "FCA", "ACMA", "FCMA", "AAIA", "FAIA", "CCC", "MIPA", "FIPA", "CIA", "CFE", "CISA", "CFAP", "QC", "Q.C.", "M.Tech", "CTA", "C.I.M.A.", "B.Ec", "CFIA", "ICCP", "CPS", "CAP-OM", "CAPTA", "TNAOAP", "AFA", "AVA", "ASA", "CAIA", "CBA", "CVA", "ICVS", "CIIA", "CMU", "PFM", "PRM", "CFP", "CWM", "CCP", "EA", "CCMT", "CGAP", "CDFM", "CFO", "CGFM", "CGAT", "CGFO", "CMFO", "CPFO", "CPFA", "BMD", "BIET", "P.Eng", "PE", "MBBS", "MB", "BCh", "BAO", "BMBS", "MBBChir", "MBChBa", "MPhil", "LL.D", "LLD", "D.Lit", "DEA", "DESS", "DClinPsy", "DSc", "MRes", "M.Res", "Psy.D", "Pharm.D", "BA(Admin]", "BAcc", "BACom", "BAdmin", "BAE", "BAEcon", "BA(Ed]", "BA(FS]", "BAgr", "BAH", "BAI", "BAI(Elect]", "BAI(Mech]", "BALaw", "BAO", "BAppSc", "BArch", "BArchSc", "BARelSt", "BASc", "BASoc", "DDS", "D.D.S.", "BASS", "BATheol", "BBA", "BBLS", "BBS", "BBus", "BChem", "BCJ", "BCL", "BCLD(SocSc]", "BClinSci", "BCom", "BCombSt", "BCommEdCommDev", "BComp", "BComSc", "BCoun", "BD", "BDes", "BE", "BEcon", "BEcon&Fin", "M.P.P.M.", "MPPM", "BEconSci", "BEd", "BEng", "BES", "BEng(Tech]", "BFA", "BFin", "BFLS", "BFST", "BH", "BHealthSc", "BHSc", "BHy", "BJur", "BL", "BLE", "BLegSc", "BLib", "BLing", "BLitt", "BLittCelt", "BLS", "BMedSc", "BMet", "BMid", "BMin", "BMS", "BMSc", "BMSc", "BMS", "BMus", "BMusEd", "BMusPerf", "BN", "BNS", "BNurs", "BOptom", "BPA", "BPharm", "BPhil", "TTC", "DIP", "Tchg", "BEd", "MEd", "ACIB", "FCIM", "FCIS", "FCS", "Fcs", "Bachelor", "O.C.", "JP", "C.Eng", "C.P.A.", "B.B.S.", "MBE", "GBE", "KBE", "DBE", "CBE", "OBE", "MRICS", "D.P.S.K.", "D.P.P.J.", "DPSK", "DPPJ", "B.B.A.", "GBS", "MIGEM", "M.I.G.E.M.", "FCIS", "BPhil(Ed]", "BPhys", "BPhysio", "BPl", "BRadiog", "BSc", "B.Sc", "BScAgr", "BSc(Dairy]", "BSc(DomSc]", "BScEc", "BScEcon", "BSc(Econ]", "BSc(Eng]", "BScFor", "BSc(HealthSc]", "BSc(Hort]", "BBA", "B.B.A.", "BSc(MCRM]", "BSc(Med]", "BSc(Mid]", "BSc(Min]", "BSc(Psych]", "BSc(Tech]", "BSD", "BSocSc", "BSS", "BStSu", "BTchg", "BTCP", "BTech", "BTechEd", "BTh", "BTheol", "BTS", "EdB", "LittB", "LLB", "MA", "MusB", "ScBTech", "CEng", "FCA", "CFA", "Cfa", "C.F.A.", "LLB", "LL.B", "LLM", "LL.M", "CA(SA]", "C.A.", "CA", "CPA", "Solicitor", "DMS", "FIWO", "CEnv", "MICE", "MIWEM", "B.Com", "BCom", "BAcc", "BA", "BEc", "MEc", "HDip", "B.Bus.", "E.S.C.P."]
    },
    "misc": ["Admiral",
        "Air Cdre",
        "Air Marshal",
        "Alderman",
        "Ambassador",
        "Archbishop",
        "Archdeacon",
        "Baron of Lewes",
        "Baron",
        "Baroness",
        "Bishop",
        "Brigadier",
        "Brother",
        "Buergermeister",
        "Canon",
        "Captain",
        "Catholic Chaplain",
        "Chairman",
        "Chevalier",
        "Chief Constable",
        "Chief Fire Officer",
        "Chief Inspector",
        "Chief Rabbi Sir",
        "Chief Supt",
        "Chief",
        "Colonel Dr",
        "Colonel",
        "Commander",
        "Commodore",
        "Comte",
        "Consort to the Deputy Mayor of Wirral",
        "Consul",
        "Councillor Mrs",
        "Councillor",
        "Count",
        "Countess",
        "Dame",
        "Dato'",
        "Datuk",
        "Dean",
        "Deputy Mayor of Sefton Councillor",
        "Deputy Vice-Chancellor Professor",
        "District Attorney",
        "District Judge",
        "Doctor",
        "Dott.",
        "Dr",
        "Duchess",
        "Duke",
        "Earl",
        "Emeritus Professor",
        "Eng",
        "Eur Ing",
        "Father",
        "Fiona",
        "Flt Lt",
        "Frau",
        "Frú",
        "General",
        "Governor",
        "Group Captain",
        "Her Excellency",
        "Her Honour Judge",
        "Her Honour",
        "Her Royal Highness Princess",
        "Her Royal Highness",
        "Herr",
        "High Sheriff of Merseyside",
        "His Excellency Chief",
        "His Excellency",
        "His Grace the Duke of Westminster",
        "His Grace The Duke",
        "His Grace",
        "His Honour Judge",
        "His Honour",
        "His Royal Highness Prince",
        "His Royal Highness",
        "Hon. Lord",
        "Hon",
        "Honourable",
        "HRH Princess",
        "Ing",
        "Judge",
        "Justice",
        "Lady Mayoress",
        "Lady",
        "Lieutenant Colonel",
        "Lieutenant Commander",
        "Lieutenant",
        "Lord Lieutenant of Merseyside Dame",
        "Lord Lieutenant of Merseyside Dr",
        "Lord Lieutenant",
        "Lord Mayor",
        "Lord",
        "Lt Cdr",
        "Lt Colonel",
        "Madam",
        "Mademoiselle",
        "Major",
        "Majors",
        "Mar",
        "Marchioness",
        "Master",
        "Mayor",
        "Mayoress",
        "Messrs",
        "Methodist Chaplain",
        "Miss",
        "Mme",
        "Monsieur",
        "Monsignor",
        "Mr and Mrs",
        "Mr Justice",
        "Mr",
        "Mrs",
        "Ms",
        "Mx",
        "of Birkenhead",
        "of Quarry Bank",
        "Pastor",
        "Police Constable",
        "Pr Eng",
        "Prebendary",
        "President",
        "Prince",
        "Princess",
        "Pro-Vice-Chancellor Professor",
        "Pro-Vice-Chancellor",
        "Professor Dame",
        "Professor Lord",
        "Professor Sir",
        "Professor the Lord",
        "Professor",
        "QPM",
        "Rabbi",
        "Revd. Cannon Dr.",
        "Reverend Brother",
        "Reverend Canon",
        "Reverend Dr",
        "Reverend Father",
        "Reverend Professor",
        "Reverend Sister",
        "Reverend",
        "Right Reverend",
        "Rt Hon",
        "Rt. Hon. Dame",
        "Rt. Hon. Lord Justice",
        "Rt. Hon. Sir",
        "Senator",
        "Senior Executive Assistant",
        "Sergent",
        "Sheikh",
        "Sir",
        "Sister",
        "Squadron Leader",
        "Sub Lt",
        "The Countess of",
        "The Duke of",
        "The Earl of",
        "The Editor",
        "The High Sheriff of Merseyside Dr.",
        "The High Sheriff",
        "The Hon Dame",
        "The Hon. Dr.",
        "The Hon. Mr. Justice",
        "The Hon. Mr",
        "The Honorable Dame",
        "The Honorable Mrs",
        "The Honorable Sir",
        "The Honorable",
        "The Lord",
        "The Mayor-Elec of Wirral Councillor",
        "The Mayor",
        "The Most Rev",
        "The Right Hon. Lord Justice",
        "The Right Hon. the Lord",
        "The Right Honourable",
        "The Rt Hon Lady Justice",
        "The Rt Hon Lord",
        "The Rt Hon Mrs",
        "The Rt Hon the Lady",
        "The Rt Hon the Lord",
        "The Rt Hon",
        "The Rt Honourable Earl of",
        "The Rt Rev Bishop",
        "The Rt Rev Dr",
        "The Rt Rev",
        "The Rt. Hon the Lord",
        "The Rt. Hon. Dame",
        "The Rt. Hon. Lady Justice",
        "The Rt. Hon. Lord",
        "The Rt. Hon. The Baroness",
        "The Rt. Hon. the Earl of",
        "The Rt. Hon. The Lady",
        "The Rt. Hon. The Lord",
        "The Rt. Hon.",
        "The Rt. Hon",
        "The Rt. Rev. Dr.",
        "The Rt. Revd. Dr.",
        "The Rt. Worshipful",
        "The Rt. Worshipfull",
        "The Very Revd. Dr.",
        "The Very Reverend",
        "The Worship the Mayor of Wirral",
        "The Worship the Mayor",
        "The Worshipful the Lord Mayor of Liverpool",
        "The Worshipful the Lord Mayor",
        "The Worshipful the Mayor of Halton",
        "The Worshipful the Mayor of Knowsley",
        "The Worshipful the Mayor of Sefton",
        "The Worshipful the Mayor of St. Helens",
        "The Worshipful the Mayor of",
        "The Worshipful the Mayor",
        "Venerable",
        "Very Reverend",
        "Vice Admiral Sir",
        "Vice-Chancellor Professor",
        "Vice-Chancellor",
        "Viscount",
        "Viscountess",
        "Wing Commander",
        "Mr.",
        "Mrs.",
        "Ms.",
        "Miss.",
        "Dr.",
        "A.V.M",
        "AB",
        "Adm.",
        "Amb",
        "AMN",
        "Archbishop",
        "Baron",
        "Baroness",
        "Bishop",
        "Brig. Gen.",
        "Bigadier",
        "Bro.",
        "Cantor",
        "Capt.",
        "Cardinal",
        "Chaplain",
        "Cmdr.",
        "CMSGT",
        "Col.",
        "Consul",
        "Count",
        "Countess",
        "Cpl.",
        "CPO",
        "CWO",
        "Dean",
        "Duchess",
        "Duke",
        "Earl",
        "Ens.",
        "Eur Eng",
        "Father",
        "Fr.",
        "Gen.",
        "Gov.",
        "H. E.",
        "Herr",
        "Hon",
        "HRH",
        "Lady",
        "Lord",
        "Lt.",
        "Lt. Cmdr.",
        "Lt. Col.",
        "Lt. Gen.",
        "M.",
        "Maj.",
        "Maj. Gen",
        "Master",
        "Mile.",
        "Mme.",
        "Mother",
        "MSGT",
        "Pastor",
        "PFC",
        "Pres.",
        "Prince",
        "Princess",
        "Prof.",
        "Rabbi",
        "Radm",
        "Rev.",
        "Rt. Hon.",
        "Senator",
        "Sgt.",
        "Sgt. Maj.",
        "Sir",
        "Sister",
        "SMSGT",
        "Speaker",
        "Squad. Ldr.",
        "Sr.",
        "SrA",
        "Sra",
        "Srta",
        "SSGT",
        "Swami",
        "STSGT",
        "Jr",
        "Sr",
        "II",
        "III",
        "M.D",
        "Ph.D.",
        "(Ret)",
        "C.P.A",
        "D.D.S",
        "DC",
        "DD",
        "DDSPA",
        "DMD",
        "DO",
        "DPM",
        "DR",
        "DVM",
        "ESP",
        "Esq.",
        "Filho",
        "I",
        "INC",
        "ITF",
        "IV",
        "IX",
        "MDPA",
        "MFCC",
        "MS",
        "ND",
        "Neto",
        "O.D.P.C.",
        "O.F.M.",
        "OBS",
        "OD",
        "P.A.",
        "PC",
        "PRS",
        "Q.C.",
        "R.N.",
        "Sobrinho",
        "THD",
        "V",
        "VI",
        "VMD",
        "VP",
        "Mr",
        "Mrs",
        "Ms",
        "Miss",
        "Dr",
        "Herr",
        "Monsieur",
        "Hr",
        "Frau",
        "-",
        "A V M",
        "Admiraal",
        "Admiral",
        "Air Cdre",
        "Air Commodore",
        "Air Marshal",
        "Air Vice Marshal",
        "Alderman",
        "Alhaji",
        "Ambassador",
        "Baron",
        "Barones",
        "Brig",
        "Brig Gen",
        "Brig General",
        "Brigadier",
        "Brigadier General",
        "Brother",
        "Canon",
        "Capt",
        "Captain",
        "Cardinal",
        "Cdr",
        "Chief",
        "Cik",
        "Cmdr",
        "Col",
        "Col Dr",
        "Colonel",
        "Commandant",
        "Commander",
        "Commissioner",
        "Commodore",
        "Comte",
        "Comtessa",
        "Congressman",
        "Conseiller",
        "Consul",
        "Conte",
        "Contessa",
        "Corporal",
        "Councillor",
        "Count",
        "Countess",
        "Crown Prince",
        "Crown Princess",
        "Dame",
        "Datin",
        "Dato",
        "Datuk",
        "Datuk Seri",
        "Deacon",
        "Deaconess",
        "Dean",
        "Dhr",
        "Dipl Ing",
        "Doctor",
        "Dott",
        "Dott sa",
        "Dr",
        "Dr Ing",
        "Dra",
        "Drs",
        "Embajador",
        "Embajadora",
        "En",
        "Encik",
        "Eng",
        "Eur Ing",
        "Exma Sra",
        "Exmo Sr",
        "F O",
        "Father",
        "First Lieutient",
        "First Officer",
        "Flt Lieut",
        "Flying Officer",
        "Fr",
        "Frau",
        "Fraulein",
        "Fru",
        "Gen",
        "Generaal",
        "General",
        "Governor",
        "Graaf",
        "Gravin",
        "Group Captain",
        "Grp Capt",
        "H E Dr",
        "H H",
        "H M",
        "H R H",
        "Hajah",
        "Haji",
        "Hajim",
        "Her Highness",
        "Her Majesty",
        "Herr",
        "High Chief",
        "His Highness",
        "His Holiness",
        "His Majesty",
        "Hon",
        "Hr",
        "Hra",
        "Ing",
        "Ir",
        "Jonkheer",
        "Judge",
        "Justice",
        "Khun Ying",
        "Kolonel",
        "Lady",
        "Lcda",
        "Lic",
        "Lieut",
        "Lieut Cdr",
        "Lieut Col",
        "Lieut Gen",
        "Lord",
        "M",
        "M L",
        "M R",
        "Madame",
        "Mademoiselle",
        "Maj Gen",
        "Major",
        "Master",
        "Mevrouw",
        "Miss",
        "Mlle",
        "Mme",
        "Monsieur",
        "Monsignor",
        "Mr",
        "Mrs",
        "Ms",
        "Mstr",
        "Nti",
        "Pastor",
        "President",
        "Prince",
        "Princess",
        "Princesse",
        "Prinses",
        "Prof",
        "Prof Dr",
        "Prof Sir",
        "Professor",
        "Puan",
        "Puan Sri",
        "Rabbi",
        "Rear Admiral",
        "Rev",
        "Rev Canon",
        "Rev Dr",
        "Rev Mother",
        "Reverend",
        "Rva",
        "Senator",
        "Sergeant",
        "Sheikh",
        "Sheikha",
        "Sig",
        "Sig na",
        "Sig ra",
        "Sir",
        "Sister",
        "Sqn Ldr",
        "Sr",
        "Sr D",
        "Sra",
        "Srta",
        "Sultan",
        "Tan Sri",
        "Tan Sri Dato",
        "Tengku",
        "Teuku",
        "Than Puying",
        "The Hon Dr",
        "The Hon Justice",
        "The Hon Miss",
        "The Hon Mr",
        "The Hon Mrs",
        "The Hon Ms",
        "The Hon Sir",
        "The Very Rev",
        "Toh Puan",
        "Tun",
        "Vice Admiral",
        "Viscount",
        "Viscountess",
        "Wg Cdr"
    ]
}


const _ = require('lodash');

// console.log(h);

var honorifics = [];

_.each(h, (o, type) => {

    // console.log(type);

    if (_.isArray(o)) {
        // console.log(o, type);
        honorifics = _.union(honorifics, o);
    } else {
        _.each(o, (oo, key) => {

            // console.log(oo, key);
            honorifics = _.union(honorifics, [key], oo);

        });
    }

});

const fs = require('fs');

honorifics = honorifics.filter(w => w.length > 1).map(w => _.escapeRegExp(w));

fs.writeFileSync('./data/honorifics.json', JSON.stringify(honorifics.sort(),0,4));

