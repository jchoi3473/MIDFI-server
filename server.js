const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors');
const { json } = require('body-parser');
const app = express();
app.use(bodyParser.json())
app.use(cors())


const database = {
    // applications: [
    //     {
    //         _id: null,
    //         applicationID: "10883d1d-38e1-45ee-986f-8df91b9184a1",
    //         uID: "39d52fc6-c8e8-4a62-8bbf-b6f26a1cb02d",
    //         authID: null,
    //         Tasks: [
    //             {
    //                 midTaskID: "4d97ebd7-7dcb-4012-b4dd-07fda3d93d5a",
    //                 Time: new Date('2020-01-05'),
    //                 Title: "Applied",
    //                 Status: true,
    //                 showDate: true,
    //             },
    //             {
    //                 midTaskID: "4d97ebd7-7dcb-1234-b4dd-07fda3d93d5a",
    //                 Time: new Date('2020-01-10'),
    //                 Title: "Interview",
    //                 Status: false,
    //                 showDate: true,
    //             },
                
    //         ],
    //         Detail: {
    //             applicationID: "10883d1d-38e1-45ee-986f-8df91b9184a1",
    //             uID: "39d52fc6-c8e8-4a62-8bbf-b6f26a1cb02d",
    //             CompanyName: "Facebook",
    //             PositionName: "Summer Internship 2020",
    //             companyID: null,
    //             positionID: null,
    //             IsFavorite: false,
    //             Status: null,
    //             Categories: [
    //                 {
    //                     Type: "Role",
    //                     SuggestionsOrSeleceted: [
    //                         "Product Design", "Software Engineer"
    //                     ]
    //                 },
    //                 {
    //                     Type: "Location",
    //                     SuggestionsOrSeleceted: [
    //                         "New York"
    //                     ]
    //                 },
                    
    //             ]
    //         },
    //     }
    // ],
    applications:[
        {
        _id: null,
        applicationID: '9a3c98d6-171f-42e9-a8b9-9e7a9799f48f',
        uID: '2982b237-0fd3-4665-8766-46ccde9587c0',
        authID: null,
        Tasks: [
          {
            midTaskID: '6d7a8875-24f8-4318-8aa7-b532a08816e6',
            Time: new Date('2020-01-05'),
            Title: 'Interview',
            Status: false,
            IsFavorite: false,
            showDate : true
          }
        ],
        Detail: {
          applicationID: "9a3c98d6-171f-42e9-a8b9-9e7a9799f48f",
          uID: '2982b237-0fd3-4665-8766-46ccde9587c0',
          PositionName: 'Position 15',
          CompanyName: 'Company 15',
          companyID: null,
          positionID: null,
          Status: [
            {
              midTaskID: '2759cc7a-3595-4fef-9ad4-d29892d24916',
              Time: '2020-11-01T10:20:08.7305311-05:00',
              Title: 'Submission',
              Status: false,
              IsFavorite: false,
              showDate : true
            },
            {
              midTaskID: '94d2ccfb-ba0b-4bd7-a7d2-cb15d0ed16c2',
              Time: '9999-12-31T00:00:00',
              Title: 'Results',
              Status: false,
              IsFavorite: false
            }
          ],
          Categories: [
            {
              Type: 'Type 0',
              SuggestionsOrSeleceted: [
                'Type 0 - Item 0',
                'Type 0 - Item 1',
                'Type 0 - Item 2'
              ]
            },
            {
              Type: 'Type 1',
              SuggestionsOrSeleceted: [
                'Type 1 - Item 0',
                'Type 1 - Item 1',
                'Type 1 - Item 2'
              ]
            },
            {
              Type: 'Type 2',
              SuggestionsOrSeleceted: [
                'Type 2 - Item 0',
                'Type 2 - Item 1',
                'Type 2 - Item 2'
              ]
            }
          ],
          IsFavorite: false
        },
        Notes: [
          {
            noteID: '43932ac3-d4ff-4418-8d38-e1db4c6cf36d',
            Detail: {
              noteID: '43932ac3-d4ff-4418-8d38-e1db4c6cf36d',
              Title: 'Note Title -2',
              Time: '2020-10-24T10:20:08.7427985-04:00'
            },
            Contents: [
              {
                noteContentsID: '14023531-8c8c-42e3-bc14-f3724aff0872',
                Header: 'Header 0',
                Contents_Text: [
                  'Header 0 - Contentx_Text0',
                  'Header 0 - Contentx_Text1',
                  'Header 0 - Contentx_Text2'
                ]
              },
              {
                noteContentsID: '335b126f-1df2-4eeb-82f1-dee4e57c54bc',
                Header: 'Header 1',
                Contents_Text: [
                  'Header 1 - Contentx_Text0',
                  'Header 1 - Contentx_Text1',
                  'Header 1 - Contentx_Text2',
                  'Header 1 - Contentx_Text3'
                ]
              },
              {
                noteContentsID: '480cd94b-e784-4757-9a94-6850893a8de5',
                Header: 'Header 2',
                Contents_Text: [
                  'Header 2 - Contentx_Text0',
                  'Header 2 - Contentx_Text1',
                  'Header 2 - Contentx_Text2'
                ]
              }
            ]
          },
          {
            noteID: '2b72ed0f-8794-4b8f-90e0-9ae4395a49cb',
            Detail: {
              noteID: '2b72ed0f-8794-4b8f-90e0-9ae4395a49cb',
              Title: 'Note Title -9',
              Time: '2020-10-17T10:20:08.743918-04:00'
            },
            Contents: [
              {
                noteContentsID: 'bfd730b6-eb12-43be-bb2a-3acaf80fd816',
                Header: 'Header 0',
                Contents_Text: [
                  'Header 0 - Contentx_Text0',
                  'Header 0 - Contentx_Text1',
                  'Header 0 - Contentx_Text2',
                  'Header 0 - Contentx_Text3',
                  'Header 0 - Contentx_Text4',
                  'Header 0 - Contentx_Text5'
                ]
              },
              {
                noteContentsID: 'fad47b2c-d810-42f0-91f9-b56d2a97dfc1',
                Header: 'Header 1',
                Contents_Text: [
                  'Header 1 - Contentx_Text0',
                  'Header 1 - Contentx_Text1',
                  'Header 1 - Contentx_Text2',
                  'Header 1 - Contentx_Text3',
                  'Header 1 - Contentx_Text4',
                  'Header 1 - Contentx_Text5'
                ]
              }
            ]
          }
        ],
        Contacts: [
          {
            contactID: 'a5de0306-1877-4d6e-9853-b8ce3cec718b',
            PersonalDetail: {
              contactID: 'a5de0306-1877-4d6e-9853-b8ce3cec718b',
              Firstname: 'Firstname 0',
              Lastname: 'Lastname 0',
              Title: 'Title 0',
              Company: 'Company 0',
              IsReadOnly: 'True',
              Width_Per_Cell: 86
            },
            Email: {
              emailID: 'e7055cab-b8b2-4a1d-ba90-478b0e33bc39',
              Email: 'Email00@gmail.com'
            },
            Phone: {
              phoneID: '2c7bd395-48f5-4c9a-ac1b-dd48af5ce8fc',
              PhoneNumber: '0'
            },
            Convo: [
              {
                noteContentsID: 'a0ad0d90-2dd5-4b77-bb74-6df9d0382f01',
                Header: 'Header 0',
                Contents_Text: [
                  'Header 0 - Contentx_Text0',
                  'Header 0 - Contentx_Text1',
                  'Header 0 - Contentx_Text2',
                  'Header 0 - Contentx_Text3',
                  'Header 0 - Contentx_Text4'
                ]
              }
            ]
          },
          {
            contactID: 'd86598b3-1723-4fcc-9c21-8dc3ecd4d8b7',
            PersonalDetail: {
              contactID: 'd86598b3-1723-4fcc-9c21-8dc3ecd4d8b7',
              Firstname: 'Firstname 1',
              Lastname: 'Lastname 1',
              Title: 'Title 1',
              Company: 'Company 1',
              IsReadOnly: 'True',
              Width_Per_Cell: 86
            },
            Email: {
              emailID: '65a38437-d8ab-426d-92d0-3fb72add8bd7',
              Email: 'Email11@gmail.com'
            },
            Phone: {
              phoneID: '1ada0518-e7a8-4076-9df7-85838e3e7ec6',
              PhoneNumber: '1000000'
            },
            Convo: [
              {
                noteContentsID: 'eefed138-88ff-475f-9cbc-91988119e233',
                Header: 'Header 0',
                Contents_Text: [
                  'Header 0 - Contentx_Text0',
                  'Header 0 - Contentx_Text1'
                ]
              }
            ]
          },
          {
            contactID: '78abcc22-9877-43cf-88e7-5a0bce0e131d',
            PersonalDetail: {
              contactID: '78abcc22-9877-43cf-88e7-5a0bce0e131d',
              Firstname: 'Firstname 2',
              Lastname: 'Lastname 2',
              Title: 'Title 2',
              Company: 'Company 2',
              IsReadOnly: 'True',
              Width_Per_Cell: 86
            },
            Email: {
              emailID: 'ef385f2e-58e7-4472-8de0-4cefd009dc5d',
              Email: 'Email22@gmail.com'
            },
            Phone: {
              phoneID: 'bee5068d-e7b9-4e87-83df-686d6b310ef8',
              PhoneNumber: '2000000'
            },
            Convo: [
              {
                noteContentsID: 'a7d94fb8-3c0a-4edd-806d-3c933e97e51d',
                Header: 'Header 0',
                Contents_Text: [
                  'Header 0 - Contentx_Text0',
                  'Header 0 - Contentx_Text1',
                  'Header 0 - Contentx_Text2',
                  'Header 0 - Contentx_Text3',
                  'Header 0 - Contentx_Text4'
                ]
              },
              {
                noteContentsID: '15ade458-84a3-4066-bbc8-6273b0f7e40e',
                Header: 'Header 1',
                Contents_Text: [
                  'Header 1 - Contentx_Text0'
                ]
              },
              {
                noteContentsID: '65cb5b36-72ab-46bf-992e-a859e1f3d248',
                Header: 'Header 2',
                Contents_Text: [
                  'Header 2 - Contentx_Text0',
                  'Header 2 - Contentx_Text1'
                ]
              }
            ]
          },
          {
            contactID: 'cb2120ee-5678-4d5a-bda2-6bb03453a454',
            PersonalDetail: {
              contactID: 'cb2120ee-5678-4d5a-bda2-6bb03453a454',
              Firstname: 'Firstname 3',
              Lastname: 'Lastname 3',
              Title: 'Title 3',
              Company: 'Company 3',
              IsReadOnly: 'True',
              Width_Per_Cell: 86
            },
            Email: {
              emailID: '0528fceb-39e5-4831-bd7f-3c148cf7c83d',
              Email: 'Email33@gmail.com'
            },
            Phone: {
              phoneID: '1b6830b1-af05-413c-8355-ed0d9230ebfe',
              PhoneNumber: '3000000'
            },
            Convo: []
          }
        ],
        FollowUps: [
          {
            followUpID: 'bd1728da-2718-4960-bcea-3a09dab4a5be',
            cotactID: '51be48ee-bc15-4836-a6a6-02fbed51dbfe',
            Time: '2020-11-21T08:52:31.7316108-05:00',
            Personnel: {
              contactID: '51be48ee-bc15-4836-a6a6-02fbed51dbfe',
              Name: 'Firstname 0',
              Position: 'Title 0',
              Company: 'Company 0',
              IsReadOnly: 'True',
              Width_Per_Cell: 86
            },
            Description: [
              {
                noteContentsID: '4d3f1b26-baaf-43b0-bb0d-59332f3af1a4',
                Header: 'Header 0',
                Contents_Text: [
                  'Header 0 - Contentx_Text0',
                  'Header 0 - Contentx_Text1',
                  'Header 0 - Contentx_Text2',
                  'Header 0 - Contentx_Text3',
                  'Header 0 - Contentx_Text4'
                ]
              },
              {
                noteContentsID: 'cf6a7999-8b39-4d54-9220-1084a0b9d1a1',
                Header: 'Header 1',
                Contents_Text: [
                  'Header 1 - Contentx_Text0',
                  'Header 1 - Contentx_Text1'
                ]
              },
              {
                noteContentsID: '156e9135-ab1a-476f-82fc-fb24b62b3f6a',
                Header: 'Header 2',
                Contents_Text: [
                  'Header 2 - Contentx_Text0'
                ]
              }
            ]
          },
          {
            followUpID: '25dfd2e1-5412-4617-95a6-cbcbd84b8d9c',
            cotactID: '1c22dac6-2e3d-46c4-8f13-3abbd6540332',
            Time: '2020-11-21T08:52:31.7320159-05:00',
            Personnel: {
              contactID: '1c22dac6-2e3d-46c4-8f13-3abbd6540332',
              Name: 'Firstname 1',
              Position: 'Title 1',
              Company: 'Company 1',
              IsReadOnly: 'True',
              Width_Per_Cell: 86
            },
            Description: [
              {
                noteContentsID: '22ddf58a-a04e-4b69-8afc-68fc4f932997',
                Header: 'Header 0',
                Contents_Text: [
                  'Header 0 - Contentx_Text0',
                  'Header 0 - Contentx_Text1'
                ]
              },
              {
                noteContentsID: 'ddce28d0-f580-490b-9bfc-9c95c5723bec',
                Header: 'Header 1',
                Contents_Text: [
                  'Header 1 - Contentx_Text0',
                  'Header 1 - Contentx_Text1',
                  'Header 1 - Contentx_Text2'
                ]
              },
              {
                noteContentsID: '2207e173-0e40-49fd-b37d-adad4d94e708',
                Header: 'Header 2',
                Contents_Text: [
                  'Header 2 - Contentx_Text0',
                  'Header 2 - Contentx_Text1'
                ]
              }
            ]
          }
        ],
        Checklists: [
          {
          checkListsID: "43932ac3-1231-vjoa-zvas-e1db4c6cf36d",
          Detail: {
            checkListsID: "43932ac3-1231-vjoa-zvas-e1db4c6cf36d",
            Title: "Checklist-item-1",
            Time: "2020-10-24T10:20:08.7427985-04:00"
          },
          Contents : [
            {
              checklistID: 'c4c2902c-3ed8-45ec-aa33-2085969e2608',
              Type: 'Resume',
              Submission: false,
              Files: null
            },
            {
              checklistID: 'ce6ac40e-20a5-458c-9b6f-9402e0a12dbb',
              Type: 'Cover Letter',
              Submission: false,
              Files: null
            },
            {
              checklistID: '566fbb25-6c53-44de-9a31-5aa7ba676507',
              Type: 'Portfolio Link',
              Submission: false,
              Files: null
            }
          ]
        },
        ],
        Events: [
          {
            eventID: '4515b10d-8a6c-4c16-ad84-d60c6593225d',
            Detail: {
              eventID: '4515b10d-8a6c-4c16-ad84-d60c6593225d',
              applicationID: '9a3c98d6-171f-42e9-a8b9-9e7a9799f48f',
              Time: '2020-11-22T23:14:44.573133-05:00',
              Location: 'Location 11',
              Title: 'Title 11'
            },
            Contents: [
              {
                eventContentsID: 'bfd730b6-1234-43be-bb2a-3acaf80fd816',
                Header: 'Header 0',
                Contents_Text: [
                  'Header 0 - Contentx_Text0',
                  'Header 0 - Contentx_Text1',
                ]
              },
            ],
          },

          {
            eventID: '13a95d76-ef76-4d76-a8bb-2e2166a934c6',
            Detail: {
              eventID: '13a95d76-ef76-4d76-a8bb-2e2166a934c6',
              applicationID: '9a3c98d6-171f-42e9-a8b9-9e7a9799f48f',
              Time: '2021-01-29T23:14:44.5733963-05:00',
              Location: 'Location 79',
              Title: 'Title 79'
            },
            Contents: [
              {
                eventContentsID: 'bfd730b6-5678-43be-bb2a-3acaf80fd816',
                Header: 'Header 1',
                Contents_Text: [
                  'Header 1 - Contentx_Text0',
                  'Header 1 - Contentx_Text1',
                ]
              },
            ],
          },
          {
            eventID: '4d1c4783-13a8-44cd-a385-b529517266ba',
            Detail: {
              eventID: '4d1c4783-13a8-44cd-a385-b529517266ba',
              applicationID: '9a3c98d6-171f-42e9-a8b9-9e7a9799f48f',
              Time: '2020-12-23T23:14:44.5733996-05:00',
              Location: 'Location 42',
              Title: 'Title 42'
            },
            Contents: [
              {
                eventContentsID: 'bfd730b6-7890-43be-bb2a-3acaf80fd816',
                Header: 'Header 2',
                Contents_Text: [
                  'Header 2 - Contentx_Text0',
                  'Header 2 - Contentx_Text1',
                ]
              },
            ],
          },
        ]
        }
    ],
    companies:[
        {
        _id: null,
        companyID: '9a3c98d6-1234-42e9-a8b9-9e7a9799f48f',
        uID: '2982b237-0fd3-4665-8766-46ccde9587c0',
        authID: null,
        Detail: {
          companyID: "9a3c98d6-1234-42e9-a8b9-9e7a9799f48f",
          uID: '2982b237-0fd3-4665-8766-46ccde9587c0',
          CompanyName: 'Google',
          companyID: null,
          IsFavorite: false,
        },
        Notes: [
          {
            noteID: '43932ac3-d4ff-4418-8d38-e1db4c6cf36d',
            Detail: {
              noteID: '43932ac3-d4ff-4418-8d38-e1db4c6cf36d',
              Title: 'Note Title -2',
              Time: '2020-10-24T10:20:08.7427985-04:00'
            },
            Contents: [
              {
                noteContentsID: '14023531-8c8c-42e3-bc14-f3724aff0872',
                Header: 'Header 0',
                Contents_Text: [
                  'Header 0 - Contentx_Text0',
                  'Header 0 - Contentx_Text1',
                  'Header 0 - Contentx_Text2'
                ]
              },
              {
                noteContentsID: '335b126f-1df2-4eeb-82f1-dee4e57c54bc',
                Header: 'Header 1',
                Contents_Text: [
                  'Header 1 - Contentx_Text0',
                  'Header 1 - Contentx_Text1',
                  'Header 1 - Contentx_Text2',
                  'Header 1 - Contentx_Text3'
                ]
              },
              {
                noteContentsID: '480cd94b-e784-4757-9a94-6850893a8de5',
                Header: 'Header 2',
                Contents_Text: [
                  'Header 2 - Contentx_Text0',
                  'Header 2 - Contentx_Text1',
                  'Header 2 - Contentx_Text2'
                ]
              }
            ]
          },
          {
            noteID: '2b72ed0f-8794-4b8f-90e0-9ae4395a49cb',
            Detail: {
              noteID: '2b72ed0f-8794-4b8f-90e0-9ae4395a49cb',
              Title: 'Note Title -9',
              Time: '2020-10-17T10:20:08.743918-04:00'
            },
            Contents: [
              {
                noteContentsID: 'bfd730b6-eb12-43be-bb2a-3acaf80fd816',
                Header: 'Header 0',
                Contents_Text: [
                  'Header 0 - Contentx_Text0',
                  'Header 0 - Contentx_Text1',
                  'Header 0 - Contentx_Text2',
                  'Header 0 - Contentx_Text3',
                  'Header 0 - Contentx_Text4',
                  'Header 0 - Contentx_Text5'
                ]
              },
              {
                noteContentsID: 'fad47b2c-d810-42f0-91f9-b56d2a97dfc1',
                Header: 'Header 1',
                Contents_Text: [
                  'Header 1 - Contentx_Text0',
                  'Header 1 - Contentx_Text1',
                  'Header 1 - Contentx_Text2',
                  'Header 1 - Contentx_Text3',
                  'Header 1 - Contentx_Text4',
                  'Header 1 - Contentx_Text5'
                ]
              }
            ]
          }
        ],
        Contacts: [
          {
            contactID: 'a5de0306-11eb-4d6e-9853-b8ce3cec718b',
            PersonalDetail: {
              contactID: 'a5de0306-11eb-4d6e-9853-b8ce3cec718b',
              Firstname: 'Firstname 0',
              Lastname: 'Lastname 0',
              Title: 'Title 0',
              Company: 'Company 0',
              IsReadOnly: 'True',
              Width_Per_Cell: 86
            },
            Email: {
              emailID: 'e7055cab-b8b2-4a1d-ba90-478b0e33bc39',
              Email: 'Email00@gmail.com'
            },
            Phone: {
              phoneID: '2c7bd395-48f5-4c9a-ac1b-dd48af5ce8fc',
              PhoneNumber: '0'
            },
            Convo: [
              {
                noteContentsID: 'a0ad0d90-2dd5-4b77-bb74-6df9d0382f01',
                Header: 'Header 0',
                Contents_Text: [
                  'Header 0 - Contentx_Text0',
                  'Header 0 - Contentx_Text1',
                  'Header 0 - Contentx_Text2',
                  'Header 0 - Contentx_Text3',
                  'Header 0 - Contentx_Text4'
                ]
              }
            ]
          },
          {
            contactID: 'd86598b3-2a20-4fcc-9c21-8dc3ecd4d8b7',
            PersonalDetail: {
              contactID: 'd86598b3-2a20-4fcc-9c21-8dc3ecd4d8b7',
              Firstname: 'Firstname 1',
              Lastname: 'Lastname 1',
              Title: 'Title 1',
              Company: 'Company 1',
              IsReadOnly: 'True',
              Width_Per_Cell: 86
            },
            Email: {
              emailID: '65a38437-d8ab-426d-92d0-3fb72add8bd7',
              Email: 'Email11@gmail.com'
            },
            Phone: {
              phoneID: '1ada0518-e7a8-4076-9df7-85838e3e7ec6',
              PhoneNumber: '1000000'
            },
            Convo: [
              {
                noteContentsID: 'eefed138-88ff-475f-9cbc-91988119e233',
                Header: 'Header 0',
                Contents_Text: [
                  'Header 0 - Contentx_Text0',
                  'Header 0 - Contentx_Text1'
                ]
              }
            ]
          },
          {
            contactID: '78abcc22-397c-43cf-88e7-5a0bce0e131d',
            PersonalDetail: {
              contactID: '78abcc22-397c-43cf-88e7-5a0bce0e131d',
              Firstname: 'Firstname 2',
              Lastname: 'Lastname 2',
              Title: 'Title 2',
              Company: 'Company 2',
              IsReadOnly: 'True',
              Width_Per_Cell: 86
            },
            Email: {
              emailID: 'ef385f2e-58e7-4472-8de0-4cefd009dc5d',
              Email: 'Email22@gmail.com'
            },
            Phone: {
              phoneID: 'bee5068d-e7b9-4e87-83df-686d6b310ef8',
              PhoneNumber: '2000000'
            },
            Convo: [
              {
                noteContentsID: 'a7d94fb8-3c0a-4edd-806d-3c933e97e51d',
                Header: 'Header 0',
                Contents_Text: [
                  'Header 0 - Contentx_Text0',
                  'Header 0 - Contentx_Text1',
                  'Header 0 - Contentx_Text2',
                  'Header 0 - Contentx_Text3',
                  'Header 0 - Contentx_Text4'
                ]
              },
              {
                noteContentsID: '15ade458-84a3-4066-bbc8-6273b0f7e40e',
                Header: 'Header 1',
                Contents_Text: [
                  'Header 1 - Contentx_Text0'
                ]
              },
              {
                noteContentsID: '65cb5b36-72ab-46bf-992e-a859e1f3d248',
                Header: 'Header 2',
                Contents_Text: [
                  'Header 2 - Contentx_Text0',
                  'Header 2 - Contentx_Text1'
                ]
              }
            ]
          },
          {
            contactID: 'cb2120ee-f5b1-4d5a-bda2-6bb03453a454',
            PersonalDetail: {
              contactID: 'cb2120ee-f5b1-4d5a-bda2-6bb03453a454',
              Firstname: 'Firstname 3',
              Lastname: 'Lastname 3',
              Title: 'Title 3',
              Company: 'Company 3',
              IsReadOnly: 'True',
              Width_Per_Cell: 86
            },
            Email: {
              emailID: '0528fceb-39e5-4831-bd7f-3c148cf7c83d',
              Email: 'Email33@gmail.com'
            },
            Phone: {
              phoneID: '1b6830b1-af05-413c-8355-ed0d9230ebfe',
              PhoneNumber: '3000000'
            },
            Convo: []
          }
        ],
        FollowUps: [
          {
            followUpID: '3b5a5e30-07e6-42bc-80cc-a7350cbaa3a9',
            cotactID: '4b20aec1-e53c-40b4-9a02-328d43c3fcd6',
            Time: '2020-10-16T10:20:08.7468742-04:00',
            Personnel: {
              contactID: '4b20aec1-e53c-40b4-9a02-328d43c3fcd6',
              Name: 'Firstname 0',
              Position: 'Title 0',
              Company: 'Company 0'
            },
            Description: [
              {
                noteContentsID: '4d3f1b26-fqwb-43b0-bb0d-59332f3af1a4',
                Header: 'Header 0',
                Contents_Text: [
                  'Header 0 - Contentx_Text0',
                  'Header 0 - Contentx_Text1',
                ]
              },
              {
                noteContentsID: 'cf6a7999-tqwe-4d54-9220-1084a0b9d1a1',
                Header: 'Header 1',
                Contents_Text: [
                  'Header 1 - Contentx_Text0',
                  'Header 1 - Contentx_Text1'
                ]
              },
              {
                noteContentsID: '156e9135-bzxc-476f-82fc-fb24b62b3f6a',
                Header: 'Header 2',
                Contents_Text: [
                  'Header 2 - Contentx_Text0'
                ]
              }
            ]
          },
          {
            followUpID: 'fce9b2b4-a83c-4ca4-b9ed-a077f8059bac',
            cotactID: 'f7977cf3-6d75-42af-be65-e92854b77533',
            Time: '2020-10-22T10:20:08.7473385-04:00',
            Personnel: {
              contactID: 'f7977cf3-6d75-42af-be65-e92854b77533',
              Firstname: 'Firstname 1',
              Lastname: 'Lastname 1',
              Title: 'Title 1',
              Company: 'Company 1'
            },
            Description: [
              {
                noteContentsID: '4d3f1b26-fqwb-1234-bb0d-59332f3af1a4',
                Header: 'Header 0',
                Contents_Text: [
                  'Header 0 - Contentx_Text0',
                  'Header 0 - Contentx_Text1',
                ]
              },
              {
                noteContentsID: 'cf6a7999-tqwe-zxva-9220-1084a0b9d1a1',
                Header: 'Header 1',
                Contents_Text: [
                  'Header 1 - Contentx_Text0',
                  'Header 1 - Contentx_Text1'
                ]
              },
              {
                noteContentsID: '156e9135-bzxc-hqwe-82fc-fb24b62b3f6a',
                Header: 'Header 2',
                Contents_Text: [
                  'Header 2 - Contentx_Text0'
                ]
              }
            ]
          },
          {
            followUpID: '95b527b3-2c60-4ea8-8571-c1fe20a99fa5',
            cotactID: '566a6dc3-c72f-4205-bc26-cdb4b16203fd',
            Time: '2020-10-19T10:20:08.7473645-04:00',
            Personnel: {
              contactID: '566a6dc3-c72f-4205-bc26-cdb4b16203fd',
              Name: 'Firstname 2',
              Position: 'Title 2',
              Company: 'Company 2'
            },
            Description: [
              {
                noteContentsID: '4d3f1b26-fqwb-43b0-16as-59332f3af1a4',
                Header: 'Header 0',
                Contents_Text: [
                  'Header 0 - Contentx_Text0',
                  'Header 0 - Contentx_Text1',
                ]
              },
              {
                noteContentsID: 'cf6a7999-tqwe-4d54-xvas-1084a0b9d1a1',
                Header: 'Header 1',
                Contents_Text: [
                  'Header 1 - Contentx_Text0',
                  'Header 1 - Contentx_Text1'
                ]
              },
              {
                noteContentsID: '156e9135-bzxc-476f-rtjk-fb24b62b3f6a',
                Header: 'Header 2',
                Contents_Text: [
                  'Header 2 - Contentx_Text0'
                ]
              }
            ]
          }
        ],
        Checklists: [
          {
          checkListsID: "43932ac3-1231-vjoa-zvas-e1db4c6cf36d",
          Detail: {
            checkListsID: "43932ac3-1231-vjoa-zvas-e1db4c6cf36d",
            Title: "Checklist-item-1",
            Time: "2020-10-24T10:20:08.7427985-04:00"
          },
          Contents : [
            {
              checklistID: 'c4c2902c-3ed8-45ec-aa33-2085969e2608',
              Type: 'Resume',
              Submission: false,
              Files: null
            },
            {
              checklistID: 'ce6ac40e-20a5-458c-9b6f-9402e0a12dbb',
              Type: 'Cover Letter',
              Submission: false,
              Files: null
            },
            {
              checklistID: '566fbb25-6c53-44de-9a31-5aa7ba676507',
              Type: 'Portfolio Link',
              Submission: false,
              Files: null
            }
          ]
        },
        ],
        Events: [
          {
            eventID: '4515b10d-8a6c-4c16-ad84-d60c6593225d',
            Detail: {
              eventID: '4515b10d-8a6c-4c16-ad84-d60c6593225d',
              applicationID: '9a3c98d6-171f-42e9-a8b9-9e7a9799f48f',
              Time: '2020-11-22T23:14:44.573133-05:00',
              Location: 'Location 11',
              Title: 'Title 11'
            },
            Contents: [
              {
                eventContentsID: 'bfd730b6-1234-43be-bb2a-3acaf80fd816',
                Header: 'Header 0',
                Contents_Text: [
                  'Header 0 - Contentx_Text0',
                  'Header 0 - Contentx_Text1',
                ]
              },
            ],
          },

          {
            eventID: '13a95d76-ef76-4d76-a8bb-2e2166a934c6',
            Detail: {
              eventID: '13a95d76-ef76-4d76-a8bb-2e2166a934c6',
              applicationID: '9a3c98d6-171f-42e9-a8b9-9e7a9799f48f',
              Time: '2021-01-29T23:14:44.5733963-05:00',
              Location: 'Location 79',
              Title: 'Title 79'
            },
            Contents: [
              {
                eventContentsID: 'bfd730b6-5678-43be-bb2a-3acaf80fd816',
                Header: 'Header 1',
                Contents_Text: [
                  'Header 1 - Contentx_Text0',
                  'Header 1 - Contentx_Text1',
                ]
              },
            ],
          },
          {
            eventID: '4d1c4783-13a8-44cd-a385-b529517266ba',
            Detail: {
              eventID: '4d1c4783-13a8-44cd-a385-b529517266ba',
              applicationID: '9a3c98d6-171f-42e9-a8b9-9e7a9799f48f',
              Time: '2020-12-23T23:14:44.5733996-05:00',
              Location: 'Location 42',
              Title: 'Title 42'
            },
            Contents: [
              {
                eventContentsID: 'bfd730b6-7890-43be-bb2a-3acaf80fd816',
                Header: 'Header 2',
                Contents_Text: [
                  'Header 2 - Contentx_Text0',
                  'Header 2 - Contentx_Text1',
                ]
              },
            ],
          },
        ]
        },
        {
            _id: null,
            companyID: '9a3c98d6-5678-42e9-a8b9-9e7a9799f48f',
            uID: '2982b237-0fd3-4665-8766-46ccde9587c0',
            authID: null,
            Detail: {
              companyID: "9a3c98d6-5678-42e9-a8b9-9e7a9799f48f",
              uID: '2982b237-0fd3-4665-8766-46ccde9587c0',
              CompanyName: 'Facebook',
              companyID: null,
              IsFavorite: false,
            },
            Notes: [
              {
                noteID: '43932ac3-d4ff-4418-8d38-e1db4c6cf36d',
                Detail: {
                  noteID: '43932ac3-d4ff-4418-8d38-e1db4c6cf36d',
                  Title: 'Note Title -2',
                  Time: '2020-10-24T10:20:08.7427985-04:00'
                },
                Contents: [
                  {
                    noteContentsID: '14023531-8c8c-42e3-bc14-f3724aff0872',
                    Header: 'Header 0',
                    Contents_Text: [
                      'Header 0 - Contentx_Text0',
                      'Header 0 - Contentx_Text1',
                      'Header 0 - Contentx_Text2'
                    ]
                  },
                  {
                    noteContentsID: '335b126f-1df2-4eeb-82f1-dee4e57c54bc',
                    Header: 'Header 1',
                    Contents_Text: [
                      'Header 1 - Contentx_Text0',
                      'Header 1 - Contentx_Text1',
                      'Header 1 - Contentx_Text2',
                      'Header 1 - Contentx_Text3'
                    ]
                  },
                  {
                    noteContentsID: '480cd94b-e784-4757-9a94-6850893a8de5',
                    Header: 'Header 2',
                    Contents_Text: [
                      'Header 2 - Contentx_Text0',
                      'Header 2 - Contentx_Text1',
                      'Header 2 - Contentx_Text2'
                    ]
                  }
                ]
              },
              {
                noteID: '2b72ed0f-8794-4b8f-90e0-9ae4395a49cb',
                Detail: {
                  noteID: '2b72ed0f-8794-4b8f-90e0-9ae4395a49cb',
                  Title: 'Note Title -9',
                  Time: '2020-10-17T10:20:08.743918-04:00'
                },
                Contents: [
                  {
                    noteContentsID: 'bfd730b6-eb12-43be-bb2a-3acaf80fd816',
                    Header: 'Header 0',
                    Contents_Text: [
                      'Header 0 - Contentx_Text0',
                      'Header 0 - Contentx_Text1',
                      'Header 0 - Contentx_Text2',
                      'Header 0 - Contentx_Text3',
                      'Header 0 - Contentx_Text4',
                      'Header 0 - Contentx_Text5'
                    ]
                  },
                  {
                    noteContentsID: 'fad47b2c-d810-42f0-91f9-b56d2a97dfc1',
                    Header: 'Header 1',
                    Contents_Text: [
                      'Header 1 - Contentx_Text0',
                      'Header 1 - Contentx_Text1',
                      'Header 1 - Contentx_Text2',
                      'Header 1 - Contentx_Text3',
                      'Header 1 - Contentx_Text4',
                      'Header 1 - Contentx_Text5'
                    ]
                  }
                ]
              }
            ],
            Contacts: [
              {
                contactID: 'a5de0306-1234-4d6e-9853-b8ce3cec718b',
                PersonalDetail: {
                  contactID: 'a5de0306-1234-4d6e-9853-b8ce3cec718b',
                  Firstname: 'Firstname 0',
                  Lastname: 'Lastname 0',
                  Title: 'Title 0',
                  Company: 'Company 0',
                  IsReadOnly: 'True',
                  Width_Per_Cell: 86
                },
                Email: {
                  emailID: 'e7055cab-b8b2-4a1d-ba90-478b0e33bc39',
                  Email: 'Email00@gmail.com'
                },
                Phone: {
                  phoneID: '2c7bd395-48f5-4c9a-ac1b-dd48af5ce8fc',
                  PhoneNumber: '0'
                },
                Convo: [
                  {
                    noteContentsID: 'a0ad0d90-2dd5-4b77-bb74-6df9d0382f01',
                    Header: 'Header 0',
                    Contents_Text: [
                      'Header 0 - Contentx_Text0',
                      'Header 0 - Contentx_Text1',
                      'Header 0 - Contentx_Text2',
                      'Header 0 - Contentx_Text3',
                      'Header 0 - Contentx_Text4'
                    ]
                  }
                ]
              },
              {
                contactID: 'd86598b3-2345-4fcc-9c21-8dc3ecd4d8b7',
                PersonalDetail: {
                  contactID: 'd86598b3-2345-4fcc-9c21-8dc3ecd4d8b7',
                  Firstname: 'Firstname 1',
                  Lastname: 'Lastname 1',
                  Title: 'Title 1',
                  Company: 'Company 1',
                  IsReadOnly: 'True',
                  Width_Per_Cell: 86
                },
                Email: {
                  emailID: '65a38437-d8ab-426d-92d0-3fb72add8bd7',
                  Email: 'Email11@gmail.com'
                },
                Phone: {
                  phoneID: '1ada0518-e7a8-4076-9df7-85838e3e7ec6',
                  PhoneNumber: '1000000'
                },
                Convo: [
                  {
                    noteContentsID: 'eefed138-88ff-475f-9cbc-91988119e233',
                    Header: 'Header 0',
                    Contents_Text: [
                      'Header 0 - Contentx_Text0',
                      'Header 0 - Contentx_Text1'
                    ]
                  }
                ]
              },
              {
                contactID: '78abcc22-6789-43cf-88e7-5a0bce0e131d',
                PersonalDetail: {
                  contactID: '78abcc22-6789-43cf-88e7-5a0bce0e131d',
                  Firstname: 'Firstname 2',
                  Lastname: 'Lastname 2',
                  Title: 'Title 2',
                  Company: 'Company 2',
                  IsReadOnly: 'True',
                  Width_Per_Cell: 86
                },
                Email: {
                  emailID: 'ef385f2e-58e7-4472-8de0-4cefd009dc5d',
                  Email: 'Email22@gmail.com'
                },
                Phone: {
                  phoneID: 'bee5068d-e7b9-4e87-83df-686d6b310ef8',
                  PhoneNumber: '2000000'
                },
                Convo: [
                  {
                    noteContentsID: 'a7d94fb8-3c0a-4edd-806d-3c933e97e51d',
                    Header: 'Header 0',
                    Contents_Text: [
                      'Header 0 - Contentx_Text0',
                      'Header 0 - Contentx_Text1',
                      'Header 0 - Contentx_Text2',
                      'Header 0 - Contentx_Text3',
                      'Header 0 - Contentx_Text4'
                    ]
                  },
                  {
                    noteContentsID: '15ade458-84a3-4066-bbc8-6273b0f7e40e',
                    Header: 'Header 1',
                    Contents_Text: [
                      'Header 1 - Contentx_Text0'
                    ]
                  },
                  {
                    noteContentsID: '65cb5b36-72ab-46bf-992e-a859e1f3d248',
                    Header: 'Header 2',
                    Contents_Text: [
                      'Header 2 - Contentx_Text0',
                      'Header 2 - Contentx_Text1'
                    ]
                  }
                ]
              },
              {
                contactID: 'cb2120ee-1928-4d5a-bda2-6bb03453a454',
                PersonalDetail: {
                  contactID: 'cb2120ee-1928-4d5a-bda2-6bb03453a454',
                  Firstname: 'Firstname 3',
                  Lastname: 'Lastname 3',
                  Title: 'Title 3',
                  Company: 'Company 3',
                  IsReadOnly: 'True',
                  Width_Per_Cell: 86
                },
                Email: {
                  emailID: '0528fceb-39e5-4831-bd7f-3c148cf7c83d',
                  Email: 'Email33@gmail.com'
                },
                Phone: {
                  phoneID: '1b6830b1-af05-413c-8355-ed0d9230ebfe',
                  PhoneNumber: '3000000'
                },
                Convo: []
              }
            ],
            FollowUps: [
              {
                followUpID: '3b5a5e30-07e6-42bc-80cc-a7350cbaa3a9',
                cotactID: '4b20aec1-e53c-40b4-9a02-328d43c3fcd6',
                Time: '2020-10-16T10:20:08.7468742-04:00',
                Personnel: {
                  contactID: '4b20aec1-e53c-40b4-9a02-328d43c3fcd6',
                  Name: 'Firstname 0',
                  Position: 'Title 0',
                  Company: 'Company 0'
                },
                Description: [
                  {
                    noteContentsID: '4d3f1b26-fqwb-43b0-16as-5933fqwaf1a4',
                    Header: 'Header 0',
                    Contents_Text: [
                      'Header 0 - Contentx_Text0',
                      'Header 0 - Contentx_Text1',
                      'Header 0 - Contentx_Text2',
                    ]
                  },
                  {
                    noteContentsID: 'cf6a7999-tqwe-4d54-xvas-10vag0b9d1a1',
                    Header: 'Header 1',
                    Contents_Text: [
                      'Header 1 - Contentx_Text0',
                      'Header 1 - Contentx_Text1'
                    ]
                  },
                  {
                    noteContentsID: '156e9135-bzxc-476f-rtjk-fbasv62b3f6a',
                    Header: 'Header 2',
                    Contents_Text: [
                      'Header 2 - Contentx_Text0',
                      'Header 2 - Contentx_Text1',
                    ]
                  }
                ]
              },
              {
                followUpID: 'fce9b2b4-a83c-4ca4-b9ed-a077f8059bac',
                cotactID: 'f7977cf3-6d75-42af-be65-e92854b77533',
                Time: '2020-10-22T10:20:08.7473385-04:00',
                Personnel: {
                  contactID: 'f7977cf3-6d75-42af-be65-e92854b77533',
                  Firstname: 'Firstname 1',
                  Lastname: 'Lastname 1',
                  Title: 'Title 1',
                  Company: 'Company 1'
                },
                Description: [
                  {
                    noteContentsID: '4d3f1b26-1qhe-43b0-16as-5933fqwaf1a4',
                    Header: 'Header 0',
                    Contents_Text: [
                      'Header 0 - Contentx_Text0',
                      'Header 0 - Contentx_Text1',
                      'Header 0 - Contentx_Text2',
                    ]
                  },
                  {
                    noteContentsID: 'cf6a7999-tqwe-4d54-hbqr-10vag0b9d1a1',
                    Header: 'Header 1',
                    Contents_Text: [
                      'Header 1 - Contentx_Text0',
                      'Header 1 - Contentx_Text1'
                    ]
                  },
                  {
                    noteContentsID: '156e9135-bzxc-476f-hkwi-fbasv62b3f6a',
                    Header: 'Header 2',
                    Contents_Text: [
                      'Header 2 - Contentx_Text0',
                      'Header 2 - Contentx_Text1',
                    ]
                  }
                ]
              },
              {
                followUpID: '95b527b3-2c60-4ea8-8571-c1fe20a99fa5',
                cotactID: '566a6dc3-c72f-4205-bc26-cdb4b16203fd',
                Time: '2020-10-19T10:20:08.7473645-04:00',
                Personnel: {
                  contactID: '566a6dc3-c72f-4205-bc26-cdb4b16203fd',
                  Name: 'Firstname 2',
                  Position: 'Title 2',
                  Company: 'Company 2'
                },
                Description: [
                  {
                    noteContentsID: '4d3f1b26-1kpw-43b0-16as-5933fqwaf1a4',
                    Header: 'Header 0',
                    Contents_Text: [
                      'Header 0 - Contentx_Text0',
                      'Header 0 - Contentx_Text1',
                      'Header 0 - Contentx_Text2',
                    ]
                  },
                  {
                    noteContentsID: 'cf6a7999-utln-4d54-xvas-10vag0b9d1a1',
                    Header: 'Header 1',
                    Contents_Text: [
                      'Header 1 - Contentx_Text0',
                      'Header 1 - Contentx_Text1'
                    ]
                  },
                  {
                    noteContentsID: '156e9135-zqao-476f-rtjk-fbasv62b3f6a',
                    Header: 'Header 2',
                    Contents_Text: [
                      'Header 2 - Contentx_Text0',
                      'Header 2 - Contentx_Text1',
                    ]
                  }
                ]
              }
            ],
            Checklists: [
              {
              noteID: "43932ac3-1231-vjoa-zvas-e1db4c6cf36d",
              Detail: {
                noteID: "43932ac3-1231-vjoa-zvas-e1db4c6cf36d",
                Title: "Checklist-item-1",
                Time: "2020-10-24T10:20:08.7427985-04:00"
              },
              Contents : [
                {
                  checklistID: 'c4c2902c-3ed8-45ec-aa33-2085969e2608',
                  Type: 'Resume',
                  Submission: false,
                  Files: null
                },
                {
                  checklistID: 'ce6ac40e-20a5-458c-9b6f-9402e0a12dbb',
                  Type: 'Cover Letter',
                  Submission: false,
                  Files: null
                },
                {
                  checklistID: '566fbb25-6c53-44de-9a31-5aa7ba676507',
                  Type: 'Portfolio Link',
                  Submission: false,
                  Files: null
                }
              ]
            },
            ],
            Events: [
              {
                eventID: '4515b10d-8a6c-4c16-ad84-d60c6593225d',
                Detail: {
                  eventID: '4515b10d-8a6c-4c16-ad84-d60c6593225d',
                  applicationID: '9a3c98d6-171f-42e9-a8b9-9e7a9799f48f',
                  Time: '2020-11-22T23:14:44.573133-05:00',
                  Location: 'Location 11',
                  Title: 'Title 11'
                },
                Contents: [
                  {
                    eventContentsID: 'bfd730b6-1234-43be-bb2a-3acaf80fd816',
                    Header: 'Header 0',
                    Contents_Text: [
                      'Header 0 - Contentx_Text0',
                      'Header 0 - Contentx_Text1',
                    ]
                  },
                ],
              },
    
              {
                eventID: '13a95d76-ef76-4d76-a8bb-2e2166a934c6',
                Detail: {
                  eventID: '13a95d76-ef76-4d76-a8bb-2e2166a934c6',
                  applicationID: '9a3c98d6-171f-42e9-a8b9-9e7a9799f48f',
                  Time: '2021-01-29T23:14:44.5733963-05:00',
                  Location: 'Location 79',
                  Title: 'Title 79'
                },
                Contents: [
                  {
                    eventContentsID: 'bfd730b6-5678-43be-bb2a-3acaf80fd816',
                    Header: 'Header 1',
                    Contents_Text: [
                      'Header 1 - Contentx_Text0',
                      'Header 1 - Contentx_Text1',
                    ]
                  },
                ],
              },
              {
                eventID: '4d1c4783-13a8-44cd-a385-b529517266ba',
                Detail: {
                  eventID: '4d1c4783-13a8-44cd-a385-b529517266ba',
                  applicationID: '9a3c98d6-171f-42e9-a8b9-9e7a9799f48f',
                  Time: '2020-12-23T23:14:44.5733996-05:00',
                  Location: 'Location 42',
                  Title: 'Title 42'
                },
                Contents: [
                  {
                    eventContentsID: 'bfd730b6-7890-43be-bb2a-3acaf80fd816',
                    Header: 'Header 2',
                    Contents_Text: [
                      'Header 2 - Contentx_Text0',
                      'Header 2 - Contentx_Text1',
                    ]
                  },
                ],
              },
            ]
            }
    ]
}

// const a = {
//     applications : [JSON.parse(database.json)]
// }


app.get('/', (req, res) =>{
    res.json(database.applications)
})

app.get('/companies', (req, res) =>{
    res.json(database.companies)
})


app.post('/abc', (req, res)=> {
    const body = req.body
    res.json(body)
})

app.post('/newapp', (req, res) =>{
    const {Tasks, Detail} = req.body

    const applications  = database.applications
    database.applications = applications.concat(
        {
            applicationID: applications.length+"",
            _id: null,
            uID: null,
            authID: null,
            Detail: {
                applicationID: applications.length +"",
                uID: null,
                CompanyName: Detail.CompanyName,
                PositionName: Detail.PositionName,
                IsFavorite: Detail.IsFavorite,
                companyID: null,
                positionID: null,
                Status: [
                    {
                      Time: Detail.time,
                      Title: Detail.Title,
                      Status: Detail.Status,
                      IsFavorite: Detail.IsFavorite,
                      showDate : Detail.showDate
                    },
                    {
                      midTaskID: '94d2ccfb-ba0b-4bd7-a7d2-cb15d0ed16c2',
                      Time: '9999-12-31T00:00:00',
                      Title: 'Results',
                      Status: false,
                      IsFavorite: false
                    }
                  ],
                Categories: Detail.Categories
            },
            Tasks: Tasks,
            Notes: [],
            Contacts: [],
            FollowUps: [],
            Checklists: [],
            Events: [],
        }
    )
    res.json(database.applications)
})

app.get('/profile/:id', (req, res) =>{
    const {id} = req.params;
    let {found} = false;
    database.users.forEach(user =>{
        if(user.id === id){
            found = true;
            return res.json(user);
        }
    })
    if(!found){
        res.status(400).json('not found')
    }
})

app.post('/image/:id', (req, res) =>{
    const {id} = req.params;
    let {found} = false;
    database.users.forEach(user =>{
        if(user.id === id){
            found = true;
            user.entries++;
            return res.json(user.entries);
        }
    })
    if(!found){
        res.status(400).json('not found')
    }
})

app.listen(3000, ()=>{
    console.log('app is running on port 3000')
})

