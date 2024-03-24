export type UserType = {
  name: UserNameType;
  location: UserLocationType;
  email: string;
  login: {
    uuid: string;
  };
};

export type UserNameType = {
  title: string;
  first: string;
  last: string;
};

export type UserLocationType = {
  street: {
    number: number;
    name: string;
  };
  country: string;
};

export type UserData = {
  results: UserType[];
};
