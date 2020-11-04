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
            contactID: '4b20aec1-e53c-40b4-9a02-328d43c3fcd6',
            PersonalDetail: {
              contactID: '4b20aec1-e53c-40b4-9a02-328d43c3fcd6',
              Firstname: 'Firstname 0',
              Lastname: 'Lastname 0',
              Title: 'Title 0',
              Company: 'Company 0'
            },
            Contents: [
              {
                contactID: '4b20aec1-e53c-40b4-9a02-328d43c3fcd6',
                Type: 'Email',
                Contents: [
                  {
                    noteContentsID: '4b20aec1-e53c-40b4-9a02-328d43c3fcd6',
                    Header: 'Phone',
                    Contents_Text: [
                      '0'
                    ]
                  }
                ]
              },
              {
                contactID: '4b20aec1-e53c-40b4-9a02-328d43c3fcd6',
                Type: 'Email',
                Contents: [
                  {
                    noteContentsID: '4b20aec1-e53c-40b4-9a02-328d43c3fcd6',
                    Header: 'Email',
                    Contents_Text: [
                      'Email00@gmail.com'
                    ]
                  }
                ]
              },
              {
                contactID: '4b20aec1-e53c-40b4-9a02-328d43c3fcd6',
                Type: 'ConvoNotes',
                Contents: [
                  {
                    noteContentsID: '64efdb50-b337-40ed-8fd0-41cadc0d7e1c',
                    Header: 'Header 0',
                    Contents_Text: [
                      'Header 0 - Contentx_Text0'
                    ]
                  },
                  {
                    noteContentsID: '44aacc77-9ed4-4663-b457-ba8510e0209a',
                    Header: 'Header 1',
                    Contents_Text: [
                      'Header 1 - Contentx_Text0'
                    ]
                  },
                  {
                    noteContentsID: '1d070bd6-ca2e-4da3-918d-e5e3f5d50383',
                    Header: 'Header 2',
                    Contents_Text: [
                      'Header 2 - Contentx_Text0',
                      'Header 2 - Contentx_Text1'
                    ]
                  }
                ]
              }
            ],
            Email: {
              emailID: 'e5550f77-c3d1-47ac-9985-1f18e511d176',
              Email: 'Email00@gmail.com'
            },
            Phone: {
              phoneID: '39161d95-f1b5-4029-b6d4-5b3fa0528820',
              PhoneNumber: '0'
            },
            Convo: [
              {
                noteContentsID: '64efdb50-b337-40ed-8fd0-41cadc0d7e1c',
                Header: 'Header 0',
                Contents_Text: [
                  'Header 0 - Contentx_Text0'
                ]
              },
              {
                noteContentsID: '44aacc77-9ed4-4663-b457-ba8510e0209a',
                Header: 'Header 1',
                Contents_Text: [
                  'Header 1 - Contentx_Text0'
                ]
              },
              {
                noteContentsID: '1d070bd6-ca2e-4da3-918d-e5e3f5d50383',
                Header: 'Header 2',
                Contents_Text: [
                  'Header 2 - Contentx_Text0',
                  'Header 2 - Contentx_Text1'
                ]
              }
            ]
          },
          {
            contactID: 'f7977cf3-6d75-42af-be65-e92854b77533',
            PersonalDetail: {
              contactID: 'f7977cf3-6d75-42af-be65-e92854b77533',
              Firstname: 'Firstname 1',
              Lastname: 'Lastname 1',
              Title: 'Title 1',
              Company: 'Company 1'
            },
            Contents: [
              {
                contactID: 'f7977cf3-6d75-42af-be65-e92854b77533',
                Type: 'Email',
                Contents: [
                  {
                    noteContentsID: 'f7977cf3-6d75-42af-be65-e92854b77533',
                    Header: 'Phone',
                    Contents_Text: [
                      '1000000'
                    ]
                  }
                ]
              },
              {
                contactID: 'f7977cf3-6d75-42af-be65-e92854b77533',
                Type: 'Email',
                Contents: [
                  {
                    noteContentsID: 'f7977cf3-6d75-42af-be65-e92854b77533',
                    Header: 'Email',
                    Contents_Text: [
                      'Email11@gmail.com'
                    ]
                  }
                ]
              },
              {
                contactID: 'f7977cf3-6d75-42af-be65-e92854b77533',
                Type: 'ConvoNotes',
                Contents: [
                  {
                    noteContentsID: '8a51ca6b-319e-47e1-86f9-f0fb7a534c8e',
                    Header: 'Header 0',
                    Contents_Text: [
                      'Header 0 - Contentx_Text0',
                      'Header 0 - Contentx_Text1'
                    ]
                  },
                  {
                    noteContentsID: 'ad2011a0-4e19-4d0e-ad49-0f907dd35403',
                    Header: 'Header 1',
                    Contents_Text: [
                      'Header 1 - Contentx_Text0'
                    ]
                  },
                  {
                    noteContentsID: '9741e34e-e119-48ec-87f4-9566b206af32',
                    Header: 'Header 2',
                    Contents_Text: [
                      'Header 2 - Contentx_Text0'
                    ]
                  }
                ]
              }
            ],
            Email: {
              emailID: '5c446b93-e602-4b85-9a00-9a6bcfd1aa1e',
              Email: 'Email11@gmail.com'
            },
            Phone: {
              phoneID: 'b9bbff58-353c-49df-b441-75200dd32d64',
              PhoneNumber: '1000000'
            },
            Convo: [
              {
                noteContentsID: '8a51ca6b-319e-47e1-86f9-f0fb7a534c8e',
                Header: 'Header 0',
                Contents_Text: [
                  'Header 0 - Contentx_Text0',
                  'Header 0 - Contentx_Text1'
                ]
              },
              {
                noteContentsID: 'ad2011a0-4e19-4d0e-ad49-0f907dd35403',
                Header: 'Header 1',
                Contents_Text: [
                  'Header 1 - Contentx_Text0'
                ]
              },
              {
                noteContentsID: '9741e34e-e119-48ec-87f4-9566b206af32',
                Header: 'Header 2',
                Contents_Text: [
                  'Header 2 - Contentx_Text0'
                ]
              }
            ]
          },
          {
            contactID: '566a6dc3-c72f-4205-bc26-cdb4b16203fd',
            PersonalDetail: {
              contactID: '566a6dc3-c72f-4205-bc26-cdb4b16203fd',
              Firstname: 'Firstname 2',
              Lastname: 'Lastname 2',
              Title: 'Title 2',
              Company: 'Company 2'
            },
            Contents: [
              {
                contactID: '566a6dc3-c72f-4205-bc26-cdb4b16203fd',
                Type: 'Email',
                Contents: [
                  {
                    noteContentsID: '566a6dc3-c72f-4205-bc26-cdb4b16203fd',
                    Header: 'Phone',
                    Contents_Text: [
                      '2000000'
                    ]
                  }
                ]
              },
              {
                contactID: '566a6dc3-c72f-4205-bc26-cdb4b16203fd',
                Type: 'Email',
                Contents: [
                  {
                    noteContentsID: '566a6dc3-c72f-4205-bc26-cdb4b16203fd',
                    Header: 'Email',
                    Contents_Text: [
                      'Email22@gmail.com'
                    ]
                  }
                ]
              },
              {
                contactID: '566a6dc3-c72f-4205-bc26-cdb4b16203fd',
                Type: 'ConvoNotes',
                Contents: [
                  {
                    noteContentsID: '16f711e9-3a3d-4829-bc44-71db3ae6ab2a',
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
                    noteContentsID: 'bfc248c6-69ce-4ce1-9981-790fb5a5b4cd',
                    Header: 'Header 1',
                    Contents_Text: [
                      'Header 1 - Contentx_Text0',
                      'Header 1 - Contentx_Text1',
                      'Header 1 - Contentx_Text2',
                      'Header 1 - Contentx_Text3',
                      'Header 1 - Contentx_Text4',
                      'Header 1 - Contentx_Text5'
                    ]
                  },
                  {
                    noteContentsID: '4b789ec4-6ae5-4b86-b0c8-01145cb71449',
                    Header: 'Header 2',
                    Contents_Text: [
                      'Header 2 - Contentx_Text0'
                    ]
                  }
                ]
              }
            ],
            Email: {
              emailID: 'bd490d1a-e508-4dbb-986e-50c191118fc7',
              Email: 'Email22@gmail.com'
            },
            Phone: {
              phoneID: 'f81754b1-0e77-44c3-b181-b2af7643a993',
              PhoneNumber: '2000000'
            },
            Convo: [
              {
                noteContentsID: '16f711e9-3a3d-4829-bc44-71db3ae6ab2a',
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
                noteContentsID: 'bfc248c6-69ce-4ce1-9981-790fb5a5b4cd',
                Header: 'Header 1',
                Contents_Text: [
                  'Header 1 - Contentx_Text0',
                  'Header 1 - Contentx_Text1',
                  'Header 1 - Contentx_Text2',
                  'Header 1 - Contentx_Text3',
                  'Header 1 - Contentx_Text4',
                  'Header 1 - Contentx_Text5'
                ]
              },
              {
                noteContentsID: '4b789ec4-6ae5-4b86-b0c8-01145cb71449',
                Header: 'Header 2',
                Contents_Text: [
                  'Header 2 - Contentx_Text0'
                ]
              }
            ]
          }
        ],
        FollowUps: [
          {
            followUpID: '3b5a5e30-07e6-42bc-80cc-a7350cbaa3a9',
            cotactID: '4b20aec1-e53c-40b4-9a02-328d43c3fcd6',
            Time: '2020-10-16T10:20:08.7468742-04:00',
            Personnel: {
              contactID: '4b20aec1-e53c-40b4-9a02-328d43c3fcd6',
              Firstname: 'Firstname 0',
              Lastname: 'Lastname 0',
              Title: 'Title 0',
              Company: 'Company 0'
            },
            Description: []
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
              'Description Sample - 0'
            ]
          },
          {
            followUpID: '95b527b3-2c60-4ea8-8571-c1fe20a99fa5',
            cotactID: '566a6dc3-c72f-4205-bc26-cdb4b16203fd',
            Time: '2020-10-19T10:20:08.7473645-04:00',
            Personnel: {
              contactID: '566a6dc3-c72f-4205-bc26-cdb4b16203fd',
              Firstname: 'Firstname 2',
              Lastname: 'Lastname 2',
              Title: 'Title 2',
              Company: 'Company 2'
            },
            Description: [
              'Description Sample - 0'
            ]
          }
        ],
        Checklists: [
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
            contactID: '4b20aec1-e53c-40b4-9a02-328d43c3fcd6',
            PersonalDetail: {
              contactID: '4b20aec1-e53c-40b4-9a02-328d43c3fcd6',
              Firstname: 'Firstname 0',
              Lastname: 'Lastname 0',
              Title: 'Title 0',
              Company: 'Company 0'
            },
            Contents: [
              {
                contactID: '4b20aec1-e53c-40b4-9a02-328d43c3fcd6',
                Type: 'Email',
                Contents: [
                  {
                    noteContentsID: '4b20aec1-e53c-40b4-9a02-328d43c3fcd6',
                    Header: 'Phone',
                    Contents_Text: [
                      '0'
                    ]
                  }
                ]
              },
              {
                contactID: '4b20aec1-e53c-40b4-9a02-328d43c3fcd6',
                Type: 'Email',
                Contents: [
                  {
                    noteContentsID: '4b20aec1-e53c-40b4-9a02-328d43c3fcd6',
                    Header: 'Email',
                    Contents_Text: [
                      'Email00@gmail.com'
                    ]
                  }
                ]
              },
              {
                contactID: '4b20aec1-e53c-40b4-9a02-328d43c3fcd6',
                Type: 'ConvoNotes',
                Contents: [
                  {
                    noteContentsID: '64efdb50-b337-40ed-8fd0-41cadc0d7e1c',
                    Header: 'Header 0',
                    Contents_Text: [
                      'Header 0 - Contentx_Text0'
                    ]
                  },
                  {
                    noteContentsID: '44aacc77-9ed4-4663-b457-ba8510e0209a',
                    Header: 'Header 1',
                    Contents_Text: [
                      'Header 1 - Contentx_Text0'
                    ]
                  },
                  {
                    noteContentsID: '1d070bd6-ca2e-4da3-918d-e5e3f5d50383',
                    Header: 'Header 2',
                    Contents_Text: [
                      'Header 2 - Contentx_Text0',
                      'Header 2 - Contentx_Text1'
                    ]
                  }
                ]
              }
            ],
            Email: {
              emailID: 'e5550f77-c3d1-47ac-9985-1f18e511d176',
              Email: 'Email00@gmail.com'
            },
            Phone: {
              phoneID: '39161d95-f1b5-4029-b6d4-5b3fa0528820',
              PhoneNumber: '0'
            },
            Convo: [
              {
                noteContentsID: '64efdb50-b337-40ed-8fd0-41cadc0d7e1c',
                Header: 'Header 0',
                Contents_Text: [
                  'Header 0 - Contentx_Text0'
                ]
              },
              {
                noteContentsID: '44aacc77-9ed4-4663-b457-ba8510e0209a',
                Header: 'Header 1',
                Contents_Text: [
                  'Header 1 - Contentx_Text0'
                ]
              },
              {
                noteContentsID: '1d070bd6-ca2e-4da3-918d-e5e3f5d50383',
                Header: 'Header 2',
                Contents_Text: [
                  'Header 2 - Contentx_Text0',
                  'Header 2 - Contentx_Text1'
                ]
              }
            ]
          },
          {
            contactID: 'f7977cf3-6d75-42af-be65-e92854b77533',
            PersonalDetail: {
              contactID: 'f7977cf3-6d75-42af-be65-e92854b77533',
              Firstname: 'Firstname 1',
              Lastname: 'Lastname 1',
              Title: 'Title 1',
              Company: 'Company 1'
            },
            Contents: [
              {
                contactID: 'f7977cf3-6d75-42af-be65-e92854b77533',
                Type: 'Email',
                Contents: [
                  {
                    noteContentsID: 'f7977cf3-6d75-42af-be65-e92854b77533',
                    Header: 'Phone',
                    Contents_Text: [
                      '1000000'
                    ]
                  }
                ]
              },
              {
                contactID: 'f7977cf3-6d75-42af-be65-e92854b77533',
                Type: 'Email',
                Contents: [
                  {
                    noteContentsID: 'f7977cf3-6d75-42af-be65-e92854b77533',
                    Header: 'Email',
                    Contents_Text: [
                      'Email11@gmail.com'
                    ]
                  }
                ]
              },
              {
                contactID: 'f7977cf3-6d75-42af-be65-e92854b77533',
                Type: 'ConvoNotes',
                Contents: [
                  {
                    noteContentsID: '8a51ca6b-319e-47e1-86f9-f0fb7a534c8e',
                    Header: 'Header 0',
                    Contents_Text: [
                      'Header 0 - Contentx_Text0',
                      'Header 0 - Contentx_Text1'
                    ]
                  },
                  {
                    noteContentsID: 'ad2011a0-4e19-4d0e-ad49-0f907dd35403',
                    Header: 'Header 1',
                    Contents_Text: [
                      'Header 1 - Contentx_Text0'
                    ]
                  },
                  {
                    noteContentsID: '9741e34e-e119-48ec-87f4-9566b206af32',
                    Header: 'Header 2',
                    Contents_Text: [
                      'Header 2 - Contentx_Text0'
                    ]
                  }
                ]
              }
            ],
            Email: {
              emailID: '5c446b93-e602-4b85-9a00-9a6bcfd1aa1e',
              Email: 'Email11@gmail.com'
            },
            Phone: {
              phoneID: 'b9bbff58-353c-49df-b441-75200dd32d64',
              PhoneNumber: '1000000'
            },
            Convo: [
              {
                noteContentsID: '8a51ca6b-319e-47e1-86f9-f0fb7a534c8e',
                Header: 'Header 0',
                Contents_Text: [
                  'Header 0 - Contentx_Text0',
                  'Header 0 - Contentx_Text1'
                ]
              },
              {
                noteContentsID: 'ad2011a0-4e19-4d0e-ad49-0f907dd35403',
                Header: 'Header 1',
                Contents_Text: [
                  'Header 1 - Contentx_Text0'
                ]
              },
              {
                noteContentsID: '9741e34e-e119-48ec-87f4-9566b206af32',
                Header: 'Header 2',
                Contents_Text: [
                  'Header 2 - Contentx_Text0'
                ]
              }
            ]
          },
          {
            contactID: '566a6dc3-c72f-4205-bc26-cdb4b16203fd',
            PersonalDetail: {
              contactID: '566a6dc3-c72f-4205-bc26-cdb4b16203fd',
              Firstname: 'Firstname 2',
              Lastname: 'Lastname 2',
              Title: 'Title 2',
              Company: 'Company 2'
            },
            Contents: [
              {
                contactID: '566a6dc3-c72f-4205-bc26-cdb4b16203fd',
                Type: 'Email',
                Contents: [
                  {
                    noteContentsID: '566a6dc3-c72f-4205-bc26-cdb4b16203fd',
                    Header: 'Phone',
                    Contents_Text: [
                      '2000000'
                    ]
                  }
                ]
              },
              {
                contactID: '566a6dc3-c72f-4205-bc26-cdb4b16203fd',
                Type: 'Email',
                Contents: [
                  {
                    noteContentsID: '566a6dc3-c72f-4205-bc26-cdb4b16203fd',
                    Header: 'Email',
                    Contents_Text: [
                      'Email22@gmail.com'
                    ]
                  }
                ]
              },
              {
                contactID: '566a6dc3-c72f-4205-bc26-cdb4b16203fd',
                Type: 'ConvoNotes',
                Contents: [
                  {
                    noteContentsID: '16f711e9-3a3d-4829-bc44-71db3ae6ab2a',
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
                    noteContentsID: 'bfc248c6-69ce-4ce1-9981-790fb5a5b4cd',
                    Header: 'Header 1',
                    Contents_Text: [
                      'Header 1 - Contentx_Text0',
                      'Header 1 - Contentx_Text1',
                      'Header 1 - Contentx_Text2',
                      'Header 1 - Contentx_Text3',
                      'Header 1 - Contentx_Text4',
                      'Header 1 - Contentx_Text5'
                    ]
                  },
                  {
                    noteContentsID: '4b789ec4-6ae5-4b86-b0c8-01145cb71449',
                    Header: 'Header 2',
                    Contents_Text: [
                      'Header 2 - Contentx_Text0'
                    ]
                  }
                ]
              }
            ],
            Email: {
              emailID: 'bd490d1a-e508-4dbb-986e-50c191118fc7',
              Email: 'Email22@gmail.com'
            },
            Phone: {
              phoneID: 'f81754b1-0e77-44c3-b181-b2af7643a993',
              PhoneNumber: '2000000'
            },
            Convo: [
              {
                noteContentsID: '16f711e9-3a3d-4829-bc44-71db3ae6ab2a',
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
                noteContentsID: 'bfc248c6-69ce-4ce1-9981-790fb5a5b4cd',
                Header: 'Header 1',
                Contents_Text: [
                  'Header 1 - Contentx_Text0',
                  'Header 1 - Contentx_Text1',
                  'Header 1 - Contentx_Text2',
                  'Header 1 - Contentx_Text3',
                  'Header 1 - Contentx_Text4',
                  'Header 1 - Contentx_Text5'
                ]
              },
              {
                noteContentsID: '4b789ec4-6ae5-4b86-b0c8-01145cb71449',
                Header: 'Header 2',
                Contents_Text: [
                  'Header 2 - Contentx_Text0'
                ]
              }
            ]
          }
        ],
        FollowUps: [
          {
            followUpID: '3b5a5e30-07e6-42bc-80cc-a7350cbaa3a9',
            cotactID: '4b20aec1-e53c-40b4-9a02-328d43c3fcd6',
            Time: '2020-10-16T10:20:08.7468742-04:00',
            Personnel: {
              contactID: '4b20aec1-e53c-40b4-9a02-328d43c3fcd6',
              Firstname: 'Firstname 0',
              Lastname: 'Lastname 0',
              Title: 'Title 0',
              Company: 'Company 0'
            },
            Description: []
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
              'Description Sample - 0'
            ]
          },
          {
            followUpID: '95b527b3-2c60-4ea8-8571-c1fe20a99fa5',
            cotactID: '566a6dc3-c72f-4205-bc26-cdb4b16203fd',
            Time: '2020-10-19T10:20:08.7473645-04:00',
            Personnel: {
              contactID: '566a6dc3-c72f-4205-bc26-cdb4b16203fd',
              Firstname: 'Firstname 2',
              Lastname: 'Lastname 2',
              Title: 'Title 2',
              Company: 'Company 2'
            },
            Description: [
              'Description Sample - 0'
            ]
          }
        ],
        Checklists: [
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
                contactID: '4b20aec1-e53c-40b4-9a02-328d43c3fcd6',
                PersonalDetail: {
                  contactID: '4b20aec1-e53c-40b4-9a02-328d43c3fcd6',
                  Firstname: 'Firstname 0',
                  Lastname: 'Lastname 0',
                  Title: 'Title 0',
                  Company: 'Company 0'
                },
                Contents: [
                  {
                    contactID: '4b20aec1-e53c-40b4-9a02-328d43c3fcd6',
                    Type: 'Email',
                    Contents: [
                      {
                        noteContentsID: '4b20aec1-e53c-40b4-9a02-328d43c3fcd6',
                        Header: 'Phone',
                        Contents_Text: [
                          '0'
                        ]
                      }
                    ]
                  },
                  {
                    contactID: '4b20aec1-e53c-40b4-9a02-328d43c3fcd6',
                    Type: 'Email',
                    Contents: [
                      {
                        noteContentsID: '4b20aec1-e53c-40b4-9a02-328d43c3fcd6',
                        Header: 'Email',
                        Contents_Text: [
                          'Email00@gmail.com'
                        ]
                      }
                    ]
                  },
                  {
                    contactID: '4b20aec1-e53c-40b4-9a02-328d43c3fcd6',
                    Type: 'ConvoNotes',
                    Contents: [
                      {
                        noteContentsID: '64efdb50-b337-40ed-8fd0-41cadc0d7e1c',
                        Header: 'Header 0',
                        Contents_Text: [
                          'Header 0 - Contentx_Text0'
                        ]
                      },
                      {
                        noteContentsID: '44aacc77-9ed4-4663-b457-ba8510e0209a',
                        Header: 'Header 1',
                        Contents_Text: [
                          'Header 1 - Contentx_Text0'
                        ]
                      },
                      {
                        noteContentsID: '1d070bd6-ca2e-4da3-918d-e5e3f5d50383',
                        Header: 'Header 2',
                        Contents_Text: [
                          'Header 2 - Contentx_Text0',
                          'Header 2 - Contentx_Text1'
                        ]
                      }
                    ]
                  }
                ],
                Email: {
                  emailID: 'e5550f77-c3d1-47ac-9985-1f18e511d176',
                  Email: 'Email00@gmail.com'
                },
                Phone: {
                  phoneID: '39161d95-f1b5-4029-b6d4-5b3fa0528820',
                  PhoneNumber: '0'
                },
                Convo: [
                  {
                    noteContentsID: '64efdb50-b337-40ed-8fd0-41cadc0d7e1c',
                    Header: 'Header 0',
                    Contents_Text: [
                      'Header 0 - Contentx_Text0'
                    ]
                  },
                  {
                    noteContentsID: '44aacc77-9ed4-4663-b457-ba8510e0209a',
                    Header: 'Header 1',
                    Contents_Text: [
                      'Header 1 - Contentx_Text0'
                    ]
                  },
                  {
                    noteContentsID: '1d070bd6-ca2e-4da3-918d-e5e3f5d50383',
                    Header: 'Header 2',
                    Contents_Text: [
                      'Header 2 - Contentx_Text0',
                      'Header 2 - Contentx_Text1'
                    ]
                  }
                ]
              },
              {
                contactID: 'f7977cf3-6d75-42af-be65-e92854b77533',
                PersonalDetail: {
                  contactID: 'f7977cf3-6d75-42af-be65-e92854b77533',
                  Firstname: 'Firstname 1',
                  Lastname: 'Lastname 1',
                  Title: 'Title 1',
                  Company: 'Company 1'
                },
                Contents: [
                  {
                    contactID: 'f7977cf3-6d75-42af-be65-e92854b77533',
                    Type: 'Email',
                    Contents: [
                      {
                        noteContentsID: 'f7977cf3-6d75-42af-be65-e92854b77533',
                        Header: 'Phone',
                        Contents_Text: [
                          '1000000'
                        ]
                      }
                    ]
                  },
                  {
                    contactID: 'f7977cf3-6d75-42af-be65-e92854b77533',
                    Type: 'Email',
                    Contents: [
                      {
                        noteContentsID: 'f7977cf3-6d75-42af-be65-e92854b77533',
                        Header: 'Email',
                        Contents_Text: [
                          'Email11@gmail.com'
                        ]
                      }
                    ]
                  },
                  {
                    contactID: 'f7977cf3-6d75-42af-be65-e92854b77533',
                    Type: 'ConvoNotes',
                    Contents: [
                      {
                        noteContentsID: '8a51ca6b-319e-47e1-86f9-f0fb7a534c8e',
                        Header: 'Header 0',
                        Contents_Text: [
                          'Header 0 - Contentx_Text0',
                          'Header 0 - Contentx_Text1'
                        ]
                      },
                      {
                        noteContentsID: 'ad2011a0-4e19-4d0e-ad49-0f907dd35403',
                        Header: 'Header 1',
                        Contents_Text: [
                          'Header 1 - Contentx_Text0'
                        ]
                      },
                      {
                        noteContentsID: '9741e34e-e119-48ec-87f4-9566b206af32',
                        Header: 'Header 2',
                        Contents_Text: [
                          'Header 2 - Contentx_Text0'
                        ]
                      }
                    ]
                  }
                ],
                Email: {
                  emailID: '5c446b93-e602-4b85-9a00-9a6bcfd1aa1e',
                  Email: 'Email11@gmail.com'
                },
                Phone: {
                  phoneID: 'b9bbff58-353c-49df-b441-75200dd32d64',
                  PhoneNumber: '1000000'
                },
                Convo: [
                  {
                    noteContentsID: '8a51ca6b-319e-47e1-86f9-f0fb7a534c8e',
                    Header: 'Header 0',
                    Contents_Text: [
                      'Header 0 - Contentx_Text0',
                      'Header 0 - Contentx_Text1'
                    ]
                  },
                  {
                    noteContentsID: 'ad2011a0-4e19-4d0e-ad49-0f907dd35403',
                    Header: 'Header 1',
                    Contents_Text: [
                      'Header 1 - Contentx_Text0'
                    ]
                  },
                  {
                    noteContentsID: '9741e34e-e119-48ec-87f4-9566b206af32',
                    Header: 'Header 2',
                    Contents_Text: [
                      'Header 2 - Contentx_Text0'
                    ]
                  }
                ]
              },
              {
                contactID: '566a6dc3-c72f-4205-bc26-cdb4b16203fd',
                PersonalDetail: {
                  contactID: '566a6dc3-c72f-4205-bc26-cdb4b16203fd',
                  Firstname: 'Firstname 2',
                  Lastname: 'Lastname 2',
                  Title: 'Title 2',
                  Company: 'Company 2'
                },
                Contents: [
                  {
                    contactID: '566a6dc3-c72f-4205-bc26-cdb4b16203fd',
                    Type: 'Email',
                    Contents: [
                      {
                        noteContentsID: '566a6dc3-c72f-4205-bc26-cdb4b16203fd',
                        Header: 'Phone',
                        Contents_Text: [
                          '2000000'
                        ]
                      }
                    ]
                  },
                  {
                    contactID: '566a6dc3-c72f-4205-bc26-cdb4b16203fd',
                    Type: 'Email',
                    Contents: [
                      {
                        noteContentsID: '566a6dc3-c72f-4205-bc26-cdb4b16203fd',
                        Header: 'Email',
                        Contents_Text: [
                          'Email22@gmail.com'
                        ]
                      }
                    ]
                  },
                  {
                    contactID: '566a6dc3-c72f-4205-bc26-cdb4b16203fd',
                    Type: 'ConvoNotes',
                    Contents: [
                      {
                        noteContentsID: '16f711e9-3a3d-4829-bc44-71db3ae6ab2a',
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
                        noteContentsID: 'bfc248c6-69ce-4ce1-9981-790fb5a5b4cd',
                        Header: 'Header 1',
                        Contents_Text: [
                          'Header 1 - Contentx_Text0',
                          'Header 1 - Contentx_Text1',
                          'Header 1 - Contentx_Text2',
                          'Header 1 - Contentx_Text3',
                          'Header 1 - Contentx_Text4',
                          'Header 1 - Contentx_Text5'
                        ]
                      },
                      {
                        noteContentsID: '4b789ec4-6ae5-4b86-b0c8-01145cb71449',
                        Header: 'Header 2',
                        Contents_Text: [
                          'Header 2 - Contentx_Text0'
                        ]
                      }
                    ]
                  }
                ],
                Email: {
                  emailID: 'bd490d1a-e508-4dbb-986e-50c191118fc7',
                  Email: 'Email22@gmail.com'
                },
                Phone: {
                  phoneID: 'f81754b1-0e77-44c3-b181-b2af7643a993',
                  PhoneNumber: '2000000'
                },
                Convo: [
                  {
                    noteContentsID: '16f711e9-3a3d-4829-bc44-71db3ae6ab2a',
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
                    noteContentsID: 'bfc248c6-69ce-4ce1-9981-790fb5a5b4cd',
                    Header: 'Header 1',
                    Contents_Text: [
                      'Header 1 - Contentx_Text0',
                      'Header 1 - Contentx_Text1',
                      'Header 1 - Contentx_Text2',
                      'Header 1 - Contentx_Text3',
                      'Header 1 - Contentx_Text4',
                      'Header 1 - Contentx_Text5'
                    ]
                  },
                  {
                    noteContentsID: '4b789ec4-6ae5-4b86-b0c8-01145cb71449',
                    Header: 'Header 2',
                    Contents_Text: [
                      'Header 2 - Contentx_Text0'
                    ]
                  }
                ]
              }
            ],
            FollowUps: [
              {
                followUpID: '3b5a5e30-07e6-42bc-80cc-a7350cbaa3a9',
                cotactID: '4b20aec1-e53c-40b4-9a02-328d43c3fcd6',
                Time: '2020-10-16T10:20:08.7468742-04:00',
                Personnel: {
                  contactID: '4b20aec1-e53c-40b4-9a02-328d43c3fcd6',
                  Firstname: 'Firstname 0',
                  Lastname: 'Lastname 0',
                  Title: 'Title 0',
                  Company: 'Company 0'
                },
                Description: []
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
                  'Description Sample - 0'
                ]
              },
              {
                followUpID: '95b527b3-2c60-4ea8-8571-c1fe20a99fa5',
                cotactID: '566a6dc3-c72f-4205-bc26-cdb4b16203fd',
                Time: '2020-10-19T10:20:08.7473645-04:00',
                Personnel: {
                  contactID: '566a6dc3-c72f-4205-bc26-cdb4b16203fd',
                  Firstname: 'Firstname 2',
                  Lastname: 'Lastname 2',
                  Title: 'Title 2',
                  Company: 'Company 2'
                },
                Description: [
                  'Description Sample - 0'
                ]
              }
            ],
            Checklists: [
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
            applicationID: applications.length,
            _id: null,
            uID: null,
            authID: null,
            Detail: {
                applicationID: applications.length,
                uID: null,
                CompanyName: Detail.CompanyName,
                PositionName: Detail.PositionName,
                IsFavorite: Detail.IsFavorite,
                companyID: null,
                positionID: null,
                Status: [
                    {
                      Time: Tasks.time,
                      Title: Tasks.Title,
                      Status: Tasks.Status,
                      IsFavorite: Tasks.IsFavorite,
                      showDate : Tasks.showDate
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
                  contactID: '4b20aec1-e53c-40b4-9a02-328d43c3fcd6',
                  PersonalDetail: {
                    contactID: '4b20aec1-e53c-40b4-9a02-328d43c3fcd6',
                    Firstname: 'Firstname 0',
                    Lastname: 'Lastname 0',
                    Title: 'Title 0',
                    Company: 'Company 0'
                  },
                  Contents: [
                    {
                      contactID: '4b20aec1-e53c-40b4-9a02-328d43c3fcd6',
                      Type: 'Email',
                      Contents: [
                        {
                          noteContentsID: '4b20aec1-e53c-40b4-9a02-328d43c3fcd6',
                          Header: 'Phone',
                          Contents_Text: [
                            '0'
                          ]
                        }
                      ]
                    },
                    {
                      contactID: '4b20aec1-e53c-40b4-9a02-328d43c3fcd6',
                      Type: 'Email',
                      Contents: [
                        {
                          noteContentsID: '4b20aec1-e53c-40b4-9a02-328d43c3fcd6',
                          Header: 'Email',
                          Contents_Text: [
                            'Email00@gmail.com'
                          ]
                        }
                      ]
                    },
                    {
                      contactID: '4b20aec1-e53c-40b4-9a02-328d43c3fcd6',
                      Type: 'ConvoNotes',
                      Contents: [
                        {
                          noteContentsID: '64efdb50-b337-40ed-8fd0-41cadc0d7e1c',
                          Header: 'Header 0',
                          Contents_Text: [
                            'Header 0 - Contentx_Text0'
                          ]
                        },
                        {
                          noteContentsID: '44aacc77-9ed4-4663-b457-ba8510e0209a',
                          Header: 'Header 1',
                          Contents_Text: [
                            'Header 1 - Contentx_Text0'
                          ]
                        },
                        {
                          noteContentsID: '1d070bd6-ca2e-4da3-918d-e5e3f5d50383',
                          Header: 'Header 2',
                          Contents_Text: [
                            'Header 2 - Contentx_Text0',
                            'Header 2 - Contentx_Text1'
                          ]
                        }
                      ]
                    }
                  ],
                  Email: {
                    emailID: 'e5550f77-c3d1-47ac-9985-1f18e511d176',
                    Email: 'Email00@gmail.com'
                  },
                  Phone: {
                    phoneID: '39161d95-f1b5-4029-b6d4-5b3fa0528820',
                    PhoneNumber: '0'
                  },
                  Convo: [
                    {
                      noteContentsID: '64efdb50-b337-40ed-8fd0-41cadc0d7e1c',
                      Header: 'Header 0',
                      Contents_Text: [
                        'Header 0 - Contentx_Text0'
                      ]
                    },
                    {
                      noteContentsID: '44aacc77-9ed4-4663-b457-ba8510e0209a',
                      Header: 'Header 1',
                      Contents_Text: [
                        'Header 1 - Contentx_Text0'
                      ]
                    },
                    {
                      noteContentsID: '1d070bd6-ca2e-4da3-918d-e5e3f5d50383',
                      Header: 'Header 2',
                      Contents_Text: [
                        'Header 2 - Contentx_Text0',
                        'Header 2 - Contentx_Text1'
                      ]
                    }
                  ]
                },
                {
                  contactID: 'f7977cf3-6d75-42af-be65-e92854b77533',
                  PersonalDetail: {
                    contactID: 'f7977cf3-6d75-42af-be65-e92854b77533',
                    Firstname: 'Firstname 1',
                    Lastname: 'Lastname 1',
                    Title: 'Title 1',
                    Company: 'Company 1'
                  },
                  Contents: [
                    {
                      contactID: 'f7977cf3-6d75-42af-be65-e92854b77533',
                      Type: 'Email',
                      Contents: [
                        {
                          noteContentsID: 'f7977cf3-6d75-42af-be65-e92854b77533',
                          Header: 'Phone',
                          Contents_Text: [
                            '1000000'
                          ]
                        }
                      ]
                    },
                    {
                      contactID: 'f7977cf3-6d75-42af-be65-e92854b77533',
                      Type: 'Email',
                      Contents: [
                        {
                          noteContentsID: 'f7977cf3-6d75-42af-be65-e92854b77533',
                          Header: 'Email',
                          Contents_Text: [
                            'Email11@gmail.com'
                          ]
                        }
                      ]
                    },
                    {
                      contactID: 'f7977cf3-6d75-42af-be65-e92854b77533',
                      Type: 'ConvoNotes',
                      Contents: [
                        {
                          noteContentsID: '8a51ca6b-319e-47e1-86f9-f0fb7a534c8e',
                          Header: 'Header 0',
                          Contents_Text: [
                            'Header 0 - Contentx_Text0',
                            'Header 0 - Contentx_Text1'
                          ]
                        },
                        {
                          noteContentsID: 'ad2011a0-4e19-4d0e-ad49-0f907dd35403',
                          Header: 'Header 1',
                          Contents_Text: [
                            'Header 1 - Contentx_Text0'
                          ]
                        },
                        {
                          noteContentsID: '9741e34e-e119-48ec-87f4-9566b206af32',
                          Header: 'Header 2',
                          Contents_Text: [
                            'Header 2 - Contentx_Text0'
                          ]
                        }
                      ]
                    }
                  ],
                  Email: {
                    emailID: '5c446b93-e602-4b85-9a00-9a6bcfd1aa1e',
                    Email: 'Email11@gmail.com'
                  },
                  Phone: {
                    phoneID: 'b9bbff58-353c-49df-b441-75200dd32d64',
                    PhoneNumber: '1000000'
                  },
                  Convo: [
                    {
                      noteContentsID: '8a51ca6b-319e-47e1-86f9-f0fb7a534c8e',
                      Header: 'Header 0',
                      Contents_Text: [
                        'Header 0 - Contentx_Text0',
                        'Header 0 - Contentx_Text1'
                      ]
                    },
                    {
                      noteContentsID: 'ad2011a0-4e19-4d0e-ad49-0f907dd35403',
                      Header: 'Header 1',
                      Contents_Text: [
                        'Header 1 - Contentx_Text0'
                      ]
                    },
                    {
                      noteContentsID: '9741e34e-e119-48ec-87f4-9566b206af32',
                      Header: 'Header 2',
                      Contents_Text: [
                        'Header 2 - Contentx_Text0'
                      ]
                    }
                  ]
                },
                {
                  contactID: '566a6dc3-c72f-4205-bc26-cdb4b16203fd',
                  PersonalDetail: {
                    contactID: '566a6dc3-c72f-4205-bc26-cdb4b16203fd',
                    Firstname: 'Firstname 2',
                    Lastname: 'Lastname 2',
                    Title: 'Title 2',
                    Company: 'Company 2'
                  },
                  Contents: [
                    {
                      contactID: '566a6dc3-c72f-4205-bc26-cdb4b16203fd',
                      Type: 'Email',
                      Contents: [
                        {
                          noteContentsID: '566a6dc3-c72f-4205-bc26-cdb4b16203fd',
                          Header: 'Phone',
                          Contents_Text: [
                            '2000000'
                          ]
                        }
                      ]
                    },
                    {
                      contactID: '566a6dc3-c72f-4205-bc26-cdb4b16203fd',
                      Type: 'Email',
                      Contents: [
                        {
                          noteContentsID: '566a6dc3-c72f-4205-bc26-cdb4b16203fd',
                          Header: 'Email',
                          Contents_Text: [
                            'Email22@gmail.com'
                          ]
                        }
                      ]
                    },
                    {
                      contactID: '566a6dc3-c72f-4205-bc26-cdb4b16203fd',
                      Type: 'ConvoNotes',
                      Contents: [
                        {
                          noteContentsID: '16f711e9-3a3d-4829-bc44-71db3ae6ab2a',
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
                          noteContentsID: 'bfc248c6-69ce-4ce1-9981-790fb5a5b4cd',
                          Header: 'Header 1',
                          Contents_Text: [
                            'Header 1 - Contentx_Text0',
                            'Header 1 - Contentx_Text1',
                            'Header 1 - Contentx_Text2',
                            'Header 1 - Contentx_Text3',
                            'Header 1 - Contentx_Text4',
                            'Header 1 - Contentx_Text5'
                          ]
                        },
                        {
                          noteContentsID: '4b789ec4-6ae5-4b86-b0c8-01145cb71449',
                          Header: 'Header 2',
                          Contents_Text: [
                            'Header 2 - Contentx_Text0'
                          ]
                        }
                      ]
                    }
                  ],
                  Email: {
                    emailID: 'bd490d1a-e508-4dbb-986e-50c191118fc7',
                    Email: 'Email22@gmail.com'
                  },
                  Phone: {
                    phoneID: 'f81754b1-0e77-44c3-b181-b2af7643a993',
                    PhoneNumber: '2000000'
                  },
                  Convo: [
                    {
                      noteContentsID: '16f711e9-3a3d-4829-bc44-71db3ae6ab2a',
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
                      noteContentsID: 'bfc248c6-69ce-4ce1-9981-790fb5a5b4cd',
                      Header: 'Header 1',
                      Contents_Text: [
                        'Header 1 - Contentx_Text0',
                        'Header 1 - Contentx_Text1',
                        'Header 1 - Contentx_Text2',
                        'Header 1 - Contentx_Text3',
                        'Header 1 - Contentx_Text4',
                        'Header 1 - Contentx_Text5'
                      ]
                    },
                    {
                      noteContentsID: '4b789ec4-6ae5-4b86-b0c8-01145cb71449',
                      Header: 'Header 2',
                      Contents_Text: [
                        'Header 2 - Contentx_Text0'
                      ]
                    }
                  ]
                }
              ],
              FollowUps: [
                {
                  followUpID: '3b5a5e30-07e6-42bc-80cc-a7350cbaa3a9',
                  cotactID: '4b20aec1-e53c-40b4-9a02-328d43c3fcd6',
                  Time: '2020-10-16T10:20:08.7468742-04:00',
                  Personnel: {
                    contactID: '4b20aec1-e53c-40b4-9a02-328d43c3fcd6',
                    Firstname: 'Firstname 0',
                    Lastname: 'Lastname 0',
                    Title: 'Title 0',
                    Company: 'Company 0'
                  },
                  Description: []
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
                    'Description Sample - 0'
                  ]
                },
                {
                  followUpID: '95b527b3-2c60-4ea8-8571-c1fe20a99fa5',
                  cotactID: '566a6dc3-c72f-4205-bc26-cdb4b16203fd',
                  Time: '2020-10-19T10:20:08.7473645-04:00',
                  Personnel: {
                    contactID: '566a6dc3-c72f-4205-bc26-cdb4b16203fd',
                    Firstname: 'Firstname 2',
                    Lastname: 'Lastname 2',
                    Title: 'Title 2',
                    Company: 'Company 2'
                  },
                  Description: [
                    'Description Sample - 0'
                  ]
                }
              ],
              Checklists: [
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

