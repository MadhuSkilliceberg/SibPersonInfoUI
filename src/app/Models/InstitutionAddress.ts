import { InstitutionContacts } from "./InstitutionContacts";
import { InstitutionEmails } from "./InstitutionEmails";

export class InstitutionAddress {
    public Id!: number;
    public InstitutionId: number=0;
    public FlotNo!: string;
    public Address1!: string;
    public Address2!: string;
    public City!: string;
    public StateId!: number;
    public CountryId!: number;
    public MeduimId!: number;
    public CreatedOn!: Date;
    public CreatedBy!: number;
    public UpdatedOn!: Date;
    public UpdatedBy!: number;

    public InstitutionName!: string;
    public StateName!: string;
    public CountryName!: string;
    public Medium1!: string;
    public IsMain!: boolean;
    institutionemails: InstitutionEmails[] = [];

    institutioncontacts: InstitutionContacts[] = [];

}