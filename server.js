const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express();
app.use(bodyParser.json())
app.use(cors())


const database = {
    applications: [
        // {
        //     applicationDetail: {
        //         applicationID: 0,   
        //         companyName: "Facebook",
        //         positionName: "Facebook Intern - Summer 2020",
        //         pinned: false,
        //     },

        //     selectedCategories : [
        //         {
        //         index: 0,
        //         name: 'Role',
        //         selectedCategory : [],
        //         },
        //         {
        //         index: 1,
        //         name: 'Location',
        //         selectedCategory : [],
        //         }
        //     ],
        //     archived: false,
        //     dates :[
        //         {key : 0, date: new Date('2020-01-10'), showDate: true, completed: false},
        //         {key : 1, date: new Date('2020-01-16'), showDate: true, completed: true},
        //         {key : 2, date: new Date('2020-01-23'), showDate: true, completed: true},        
        //     ]
        // },
        {
            _id: null,
            applicationID: "10883d1d-38e1-45ee-986f-8df91b9184a1",
            uID: "39d52fc6-c8e8-4a62-8bbf-b6f26a1cb02d",
            authID: null,
            Tasks: [
                {
                    midTaskID: "4d97ebd7-7dcb-4012-b4dd-07fda3d93d5a",
                    Time: new Date('2020-01-05'),
                    Title: "Applied",
                    Status: true,
                    showDate: true,
                },
                {
                    midTaskID: "4d97ebd7-7dcb-1234-b4dd-07fda3d93d5a",
                    Time: new Date('2020-01-10'),
                    Title: "Interview",
                    Status: false,
                    showDate: true,

                },
                
            ],
            Detail: {
                applicationID: "10883d1d-38e1-45ee-986f-8df91b9184a1",
                uID: "39d52fc6-c8e8-4a62-8bbf-b6f26a1cb02d",
                PositionName: "Facebook",
                CompanyName: "Summer Internship 2020",
                companyID: null,
                positionID: null,
                IsFavorite: false,
                Status: null,
                Categories: [
                    {
                        Type: "Role",
                        SuggestionsOrSeleceted: [
                            "Product Design", "Software Engineer"
                        ]
                    },
                    {
                        Type: "Location",
                        SuggestionsOrSeleceted: [
                            "New York"
                        ]
                    },
                    
                ]
            },
        }
    ]
}


app.get('/', (req, res) =>{
    res.json(database.applications)
})


app.post('/abc', (req, res)=> {
    const body = req.body

    res.json(body)
})

app.post('/newapp', (req, res) =>{
    const {Tasks, Detail} = req.body

    const applications  = database.applications
    database.applications = applications.concat({
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
                Status: null,
                Categories: Detail.Categories
            },
            Tasks: Tasks,
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

