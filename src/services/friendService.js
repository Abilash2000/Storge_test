// const KEYS = {
//   employees: "employees",
//   employeeId: "employeeId",
// };

// export const getDepartmentCollection = () => [
//   { id: "1", title: "Development" },
//   { id: "2", title: "Marketing" },
//   { id: "3", title: "Accounting" },
//   { id: "4", title: "HR" },
// ];

// export function insertEmployee(data) {
//   let employees = getAllEmployees();
//   data["id"] = generateEmployeeId();
//   employees.push(data);
//   localStorage.setItem(KEYS.employees, JSON.stringify(employees));
// }

// export function generateEmployeeId() {
//   if (localStorage.getItem(KEYS.employeeId) == null)
//     localStorage.setItem(KEYS.employeeId, "0");
//   var id = parseInt(localStorage.getItem(KEYS.employeeId));
//   localStorage.setItem(KEYS.employeeId, (++id).toString());
//   return id;
// }

export function getAllFriends() {
  const data = {
    "friends": [
      {
        "id": 1,
        "firstName": "Fannie",
        "lastName": "Delacruz",
        "address": "26 Hampton Avenue, Salix, Idaho",
        "phone": 8604113252
      },
      {
        "id": 2,
        "firstName": "Marion",
        "lastName": "Hernandez",
        "address": "50 Garden Place, Remington, Tennessee",
        "phone": 8925863734
      },
      {
        "id": 3,
        "firstName": "Melanie",
        "lastName": "Park",
        "address": "52 Gerry Street, Foscoe, Hawaii",
        "phone": 8434632406
      },
      {
        "id": 4,
        "firstName": "Montgomery",
        "lastName": "Leonard",
        "address": "28 Utica Avenue, Sexton, Northern Mariana Islands",
        "phone": 8275503407
      },
      {
        "id": 5,
        "firstName": "Hubbard",
        "lastName": "Whitehead",
        "address": "62 Livonia Avenue, Loveland, Louisiana",
        "phone": 8595103287
      },
      {
        "id": 6,
        "firstName": "Clemons",
        "lastName": "Hoover",
        "address": "69 Perry Terrace, Sperryville, Kansas",
        "phone": 9774382257
      },
      {
        "id": 7,
        "firstName": "Kelly",
        "lastName": "Zimmerman",
        "address": "3 Bergen Court, Stockdale, Minnesota",
        "phone": 8205092447
      },
      {
        "id": 8,
        "firstName": "Taylor",
        "lastName": "Cooke",
        "address": "30 Lois Avenue, Albany, Ohio",
        "phone": 8035132713
      },
      {
        "id": 9,
        "firstName": "Winifred",
        "lastName": "Benton",
        "address": "68 Seba Avenue, Abrams, Virgin Islands",
        "phone": 8825952743
      },
      {
        "id": 10,
        "firstName": "Lesley",
        "lastName": "Mills",
        "address": "78 Cameron Court, Buxton, New Mexico",
        "phone": 9384802213
      },
      {
        "id": 11,
        "firstName": "Nichole",
        "lastName": "Sheppard",
        "address": "43 Gelston Avenue, Lund, Massachusetts",
        "phone": 9274623662
      },
      {
        "id": 12,
        "firstName": "Quinn",
        "lastName": "Armstrong",
        "address": "29 Ridgewood Place, Hoagland, South Dakota",
        "phone": 8924073185
      },
      {
        "id": 13,
        "firstName": "Jenkins",
        "lastName": "Pennington",
        "address": "41 Fleet Walk, Marenisco, Kentucky",
        "phone": 8635892519
      },
      {
        "id": 14,
        "firstName": "Aisha",
        "lastName": "Lindsay",
        "address": "21 Claver Place, Fulford, Texas",
        "phone": 8195583689
      },
      {
        "id": 15,
        "firstName": "Reba",
        "lastName": "Morrow",
        "address": "96 Hubbard Place, Greenock, Colorado",
        "phone": 9954772167
      },
      {
        "id": 16,
        "firstName": "Jacqueline",
        "lastName": "Merrill",
        "address": "9 Evergreen Avenue, Blue, Georgia",
        "phone": 8714392338
      },
      {
        "id": 17,
        "firstName": "Huff",
        "lastName": "Tyler",
        "address": "47 Joval Court, Romeville, Maryland",
        "phone": 8385193718
      },
      {
        "id": 18,
        "firstName": "Deana",
        "lastName": "Dodson",
        "address": "89 Gunther Place, Sanford, New Hampshire",
        "phone": 8594252907
      },
      {
        "id": 19,
        "firstName": "Donna",
        "lastName": "Williamson",
        "address": "44 Cass Place, Waiohinu, Pennsylvania",
        "phone": 8504383055
      },
      {
        "id": 20,
        "firstName": "Mccormick",
        "lastName": "Chandler",
        "address": "33 Clermont Avenue, Rehrersburg, American Samoa",
        "phone": 8695583229
      }
    ]
  }
  return new Promise((resolve) =>
  setTimeout(() => resolve({ data: data.friends }), 500)
  );
}
