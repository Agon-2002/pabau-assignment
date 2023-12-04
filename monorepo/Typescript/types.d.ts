type ISkill2 = "React" | "HTML" | "JS" | "TypeScript"  // <--- this also works but the one below covers more use cases

interface ISkill {
    id: string | number,
    name: string,
    code: number
}

interface IEmployee {
    name: string,
    age: number,
    skills: ISkill[]
}

interface IIntern extends IEmployee {}

//  < ============================= An example would look something like this ========================= >
// const intern: IIntern = {
//     name: "intern",
//     age: 10,
//     skills: [
//         {code: 1, name: HTML, id: 1}
//     ]
// }
//  < ================================================================================================= >


declare enum IDomains {
    Web,
    Connect,
    Backend
}

interface IJunior extends IEmployee {
    date_of_promotion: Date | string;
    domain: IDomains
}

//  < ============================= An example would look something like this ========================= >
// const junior: IJunior = {
//     name: "junior",
//     age: 15,
//     skills: [
//         {code: 1, name: HTML, id: 1},
//         {code: 2, name: CSS, id: "asdssdasd"},
//         {code: 3, name: JS, id: 13},
//     ],
//     date_of_promotion: "11/05/2023",
//     domain: IDomains.Web
// }
//  < ================================================================================================= >


export declare interface ICompany {
    interns: IIntern[],
    juniors: IJunior[],
    Country: string
}

//  < ============================= An example would look something like this ========================= >
// const company: ICompany = {
//     Country: "Kosova",
//     interns: [
//         {
//             age: 11,
//             name: "Intern",
//             skills: [
//                 {code: 1, name: test, id: 1}
//             ]
//         }
//     ],
//     juniors: [
//         {
//             age: 11,
//             name: "Junior",
//             skills: [
//                 {code: 1, name: HTML, id: 1}
//             ],
//             domain: IDomains.Backend
//         }
//     ]
// }
//  < ================================================================================================= >


