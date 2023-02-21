export const dataForm = [
    {
        nameBloc: [
            {
                id: "first-name",
                label: "First Name",
                category: "input",
                type: "text",
                settingFunction: "setFirstName"
            },
            {
                id: "last-name",
                label: "Last Name",
                category: "input",
                type: "text",
                settingFunction: "setLastName"
            },
            {
                id: "date-of-birth",
                label: "Date of Birth",
                category: "input",
                type: "date",
                settingFunction: "setDateOfBirth"
            },
            {
                id: "start-date",
                label: "Start Date",
                category: "input",
                type: "date",
                settingFunction: "setStartDate"
            }
        ]
    },
    {
        addressBloc: [
            {
                id: "street",
                label: "Street",
                category: "input",
                type: "text",
                settingFunction: "setStreet"
            },
            {
                id: "city",
                label: "City",
                category: "input",
                type: "text"
            },
            {
                id: "state",
                label: "State",
                category: "select"
            },
            {
                id: "zip-code",
                label: "Zip Code",
                category: "input",
                type: "number"
            }
        ]
    },
    {
        departmentBloc: [
            {
                id: "department",
                label: "Department",
                category: "select"
            }
        ]
    }
];

export const states = [
    {
        name: "Alabama",
        abbreviation: "AL"
    },
    {
        name: "Alaska",
        abbreviation: "AK"
    },
    {
        name: "American Samoa",
        abbreviation: "AS"
    },
    {
        name: "Arizona",
        abbreviation: "AZ"
    },
    {
        name: "Arkansas",
        abbreviation: "AR"
    },
    {
        name: "California",
        abbreviation: "CA"
    },
    {
        name: "Colorado",
        abbreviation: "CO"
    },
    {
        name: "Connecticut",
        abbreviation: "CT"
    },
    {
        name: "Delaware",
        abbreviation: "DE"
    },
    {
        name: "District Of Columbia",
        abbreviation: "DC"
    },
    {
        name: "Federated States Of Micronesia",
        abbreviation: "FM"
    },
    {
        name: "Florida",
        abbreviation: "FL"
    },
    {
        name: "Georgia",
        abbreviation: "GA"
    },
    {
        name: "Guam",
        abbreviation: "GU"
    },
    {
        name: "Hawaii",
        abbreviation: "HI"
    },
    {
        name: "Idaho",
        abbreviation: "ID"
    },
    {
        name: "Illinois",
        abbreviation: "IL"
    },
    {
        name: "Indiana",
        abbreviation: "IN"
    },
    {
        name: "Iowa",
        abbreviation: "IA"
    },
    {
        name: "Kansas",
        abbreviation: "KS"
    },
    {
        name: "Kentucky",
        abbreviation: "KY"
    },
    {
        name: "Louisiana",
        abbreviation: "LA"
    },
    {
        name: "Maine",
        abbreviation: "ME"
    },
    {
        name: "Marshall Islands",
        abbreviation: "MH"
    },
    {
        name: "Maryland",
        abbreviation: "MD"
    },
    {
        name: "Massachusetts",
        abbreviation: "MA"
    },
    {
        name: "Michigan",
        abbreviation: "MI"
    },
    {
        name: "Minnesota",
        abbreviation: "MN"
    },
    {
        name: "Mississippi",
        abbreviation: "MS"
    },
    {
        name: "Missouri",
        abbreviation: "MO"
    },
    {
        name: "Montana",
        abbreviation: "MT"
    },
    {
        name: "Nebraska",
        abbreviation: "NE"
    },
    {
        name: "Nevada",
        abbreviation: "NV"
    },
    {
        name: "New Hampshire",
        abbreviation: "NH"
    },
    {
        name: "New Jersey",
        abbreviation: "NJ"
    },
    {
        name: "New Mexico",
        abbreviation: "NM"
    },
    {
        name: "New York",
        abbreviation: "NY"
    },
    {
        name: "North Carolina",
        abbreviation: "NC"
    },
    {
        name: "North Dakota",
        abbreviation: "ND"
    },
    {
        name: "Northern Mariana Islands",
        abbreviation: "MP"
    },
    {
        name: "Ohio",
        abbreviation: "OH"
    },
    {
        name: "Oklahoma",
        abbreviation: "OK"
    },
    {
        name: "Oregon",
        abbreviation: "OR"
    },
    {
        name: "Palau",
        abbreviation: "PW"
    },
    {
        name: "Pennsylvania",
        abbreviation: "PA"
    },
    {
        name: "Puerto Rico",
        abbreviation: "PR"
    },
    {
        name: "Rhode Island",
        abbreviation: "RI"
    },
    {
        name: "South Carolina",
        abbreviation: "SC"
    },
    {
        name: "South Dakota",
        abbreviation: "SD"
    },
    {
        name: "Tennessee",
        abbreviation: "TN"
    },
    {
        name: "Texas",
        abbreviation: "TX"
    },
    {
        name: "Utah",
        abbreviation: "UT"
    },
    {
        name: "Vermont",
        abbreviation: "VT"
    },
    {
        name: "Virgin Islands",
        abbreviation: "VI"
    },
    {
        name: "Virginia",
        abbreviation: "VA"
    },
    {
        name: "Washington",
        abbreviation: "WA"
    },
    {
        name: "West Virginia",
        abbreviation: "WV"
    },
    {
        name: "Wisconsin",
        abbreviation: "WI"
    },
    {
        name: "Wyoming",
        abbreviation: "WY"
    }
];

export const departments = [
    {
        name: "Sales"
    },
    {
        name: "Marketing"
    },
    {
        name: "Engineering"
    },
    {
        name: "Human Resources"
    },
    {
        name: "Legal"
    }
];

export const mockedEmployees = [
    {
        firstName: "UserFirstname1",
        lastName: "UserLastname1",
        startDate: "01/02/2023",
        department: "department1",
        dateOfBirth: "02/03/1987",
        street: "Street 1",
        city: "City 1",
        state: "State 1",
        zipCode: 12345
    },
    {
        firstName: "UserFirstname2",
        lastName: "UserLastname2",
        startDate: "01/02/2023",
        department: "department2",
        dateOfBirth: "02/03/1987",
        street: "Street 2",
        city: "City 2",
        state: "State 2",
        zipCode: 12345
    },
    {
        firstName: "UserFirstname3",
        lastName: "UserLastname3",
        startDate: "01/02/2023",
        department: "department3",
        dateOfBirth: "02/03/1987",
        street: "Street 3",
        city: "City 3",
        state: "State 3",
        zipCode: 12345
    },
    {
        firstName: "UserFirstname4",
        lastName: "UserLastname4",
        startDate: "01/02/2023",
        department: "department4",
        dateOfBirth: "02/03/1987",
        street: "Street 4",
        city: "City 4",
        state: "State 4",
        zipCode: 12345
    },
    {
        firstName: "UserFirstname5",
        lastName: "UserLastname5",
        startDate: "01/02/2023",
        department: "department5",
        dateOfBirth: "02/03/1987",
        street: "Street 5",
        city: "City 5",
        state: "State 5",
        zipCode: 12345
    },
    {
        firstName: "UserFirstname6",
        lastName: "UserLastname6",
        startDate: "01/02/2026",
        department: "department6",
        dateOfBirth: "02/03/1987",
        street: "Street 6",
        city: "City 6",
        state: "State 6",
        zipCode: 12345
    },
    {
        firstName: "UserFirstname7",
        lastName: "UserLastname7",
        startDate: "01/02/2023",
        department: "department7",
        dateOfBirth: "02/03/1987",
        street: "Street 7",
        city: "City 7",
        state: "State 7",
        zipCode: 12345
    },
    {
        firstName: "UserFirstname8",
        lastName: "UserLastname8",
        startDate: "01/02/2023",
        department: "department8",
        dateOfBirth: "02/03/1987",
        street: "Street 8",
        city: "City 8",
        state: "State 8",
        zipCode: 12345
    },
    {
        firstName: "UserFirstname9",
        lastName: "UserLastname9",
        startDate: "01/02/2029",
        department: "department9",
        dateOfBirth: "02/03/1987",
        street: "Street 9",
        city: "City 9",
        state: "State 9",
        zipCode: 12345
    },
    {
        firstName: "UserFirstname10",
        lastName: "UserLastname10",
        startDate: "01/02/2023",
        department: "department10",
        dateOfBirth: "02/03/1987",
        street: "Street 10",
        city: "City 10",
        state: "State 10",
        zipCode: 12345
    },
    {
        firstName: "UserFirstname11",
        lastName: "UserLastname11",
        startDate: "01/02/2023",
        department: "department11",
        dateOfBirth: "02/03/1987",
        street: "Street 11",
        city: "City 11",
        state: "State 11",
        zipCode: 12345
    },
    {
        firstName: "UserFirstname12",
        lastName: "UserLastname12",
        startDate: "01/02/20212",
        department: "department12",
        dateOfBirth: "02/03/1987",
        street: "Street 12",
        city: "City 12",
        state: "State 12",
        zipCode: 12345
    }
];