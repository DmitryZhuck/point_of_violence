export type UserType = {
  name: UserNameType;
  gender: string;
  location: {
    counrty: string;
  };
  email: string;
  login: {
    uuid: string;
  };
  picture: {
    medium: string;
  };
};

export type UserNameType = {
  title: string;
  first: string;
  last: string;
};

export type UserData = {
  results: UserType[];
};
