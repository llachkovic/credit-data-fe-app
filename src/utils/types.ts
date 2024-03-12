export const CheckingAccountStatus = {
    LessThan0DM: 'less than 0 DM',
    Between0And200DM: '0 to less than 200 DM',
    GreaterThanOrEqual200DM:
        'greater than or equal to 200 DM / salary assignments for at least 1 year',
    NoCheckingAccount: 'no checking account',
} as const

export type CheckingAccountStatus =
    (typeof CheckingAccountStatus)[keyof typeof CheckingAccountStatus]

export const CreditHistory = {
    NoCredits: 'no credits taken / all credits paid back duly',
    AllPaidAtThisBank: 'all credits at this bank paid back duly',
    ExistingCreditsPaid: 'existing credits paid back duly till now',
    DelayInPaying: 'delay in paying off in the past',
    CriticalAccount:
        'critical account / other credits existing (not at this bank)',
} as const

export type CreditHistory = (typeof CreditHistory)[keyof typeof CreditHistory]

export const Purpose = {
    CarNew: 'car (new)',
    CarUsed: 'car (used)',
    FurnitureEquipment: 'furniture/equipment',
    RadioTelevision: 'radio/television',
    DomesticAppliances: 'domestic appliances',
    Repairs: 'repairs',
    Education: 'education',
    Retraining: 'retraining',
    Business: 'business',
    Others: 'others',
} as const

export type Purpose = (typeof Purpose)[keyof typeof Purpose]

export const SavingsAccount = {
    LessThan100DM: 'less than 100 DM',
    Between100And500DM: '100 to less than 500 DM',
    Between500And1000DM: '500 to less than 1000 DM',
    GreaterThanOrEqual1000DM: 'greater than or equal to 1000 DM',
    Unknown: 'unknown / no savings account',
} as const

export type SavingsAccount =
    (typeof SavingsAccount)[keyof typeof SavingsAccount]

export const EmploymentDuration = {
    Unemployed: 'unemployed',
    LessThan1Year: 'less than 1 year',
    Between1And4Years: '1 to less than 4 years',
    Between4And7Years: '4 to less than 7 years',
    GreaterThanOrEqual7Years: 'greater than or equal to 7 years',
} as const

export type EmploymentDuration =
    (typeof EmploymentDuration)[keyof typeof EmploymentDuration]

export const PersonalStatus = {
    MaleDivorcedSeparated: 'male: divorced/separated',
    FemaleDivorcedSeparatedMarried: 'female: divorced/separated/married',
    MaleSingle: 'male: single',
    MaleMarriedWidowed: 'male: married/widowed',
    FemaleSingle: 'female: single',
} as const

export type PersonalStatus =
    (typeof PersonalStatus)[keyof typeof PersonalStatus]

export const OtherDebtors = {
    None: 'none',
    CoApplicant: 'co-applicant',
    Guarantor: 'guarantor',
}

export type OtherDebtors = (typeof OtherDebtors)[keyof typeof OtherDebtors]

export const Property = {
    RealEstate: 'real estate',
    BuildingSociety: 'building society savings agreement/life insurance',
    CarOrOther: 'car or other (not in savings account attribute)',
    Unknown: 'unknown / no property',
} as const

export type Property = (typeof Property)[keyof typeof Property]

export const InstallmentPlans = {
    Bank: 'bank',
    Stores: 'stores',
    None: 'none',
} as const

export type InstallmentPlans =
    (typeof InstallmentPlans)[keyof typeof InstallmentPlans]

export const Housing = {
    Rent: 'rent',
    Own: 'own',
    ForFree: 'for free',
} as const

export type Housing = (typeof Housing)[keyof typeof Housing]

export const Job = {
    UnemployedNonResident: 'unemployed/unskilled - non-resident',
    UnskilledResident: 'unskilled - resident',
    SkilledEmployee: 'skilled employee/official',
    Management: 'management/self-employed/highly qualified employee/officer',
} as const

export type Job = (typeof Job)[keyof typeof Job]

export const Telephone = {
    None: 'none',
    Registered: "yes, registered under the customer's name",
} as const

export type Telephone = (typeof Telephone)[keyof typeof Telephone]

export const ForeignWorker = {
    Yes: 'yes',
    No: 'no',
} as const

export type ForeignWorker = (typeof ForeignWorker)[keyof typeof ForeignWorker]

export interface CreditApplicationForm {
    checkingAccountStatus: CheckingAccountStatus
    durationInMonths: number
    creditHistory: CreditHistory
    purpose: Purpose
    creditAmount: number
    savingsAccount: SavingsAccount
    employmentDuration: EmploymentDuration
    installmentRate: number
    personalStatus: PersonalStatus
    otherDebtors: OtherDebtors
    presentResidenceSince: number
    property: Property
    age: number
    otherInstallmentPlans: InstallmentPlans
    housing: Housing
    numberOfExistingCredits: number
    job: Job
    numberOfPeopleLiableForMaintenance: number
    telephone: Telephone
    foreignWorker: ForeignWorker
}
