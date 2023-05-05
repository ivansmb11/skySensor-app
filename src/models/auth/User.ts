interface User {
  id:               string;
  firstName:        string;
  lastName:         string;
  email:            string;
  profileImageUrl:  string | null;
  role:             string;
  age:              number;
}

export default User;