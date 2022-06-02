export namespace IDevData {
  export type Full = {
    person: Iperson;
  };

  export type Iperson = {
    name: string;
    surname: string;
    githubAccount: string;
    linkedInAccount: string;
    instagramAccount: string;
    title: string;
  };
}
