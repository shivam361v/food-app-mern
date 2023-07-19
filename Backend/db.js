 const mongoose = require('mongoose');
const mongoURI = 'mongodb+srv://shivam:FakY4ekYN0j8OYgw@cluster0.60zdq2z.mongodb.net/yumFood?retryWrites=true&w=majority'

const mongoDB = async() => 
{
    mongoose.connect(mongoURI, { useNewUrlParser: true }, async (err, result) => {
        if (err) {
            console.log("---", err);
        }

        else {
            console.log("connected");
            const fetched_data = await mongoose.connection.db.collection("food_items");
            fetched_data.find({}).toArray(async function (err, data) 
            {
                const foodCategory = await mongoose.connection.db.collection("food_category");
                foodCategory.find({}).toArray(async function(err, catData){
                    if(err) console.log(err);
                    else
                    {
                        global.food_items = data;
                        global.food_category = catData;
                    }
                })

                if (err) 
                {
                    console.log(err);
                }

                else {
                    console.log("connected to yumFood");
                }
            });
        }
    });
}

module.exports = mongoDB;
// const mongoDB = async () => {
//     try {
//         mongoose.set('strictQuery', false)
//         mongoose.connect(process.env.mongoURI) 
//         console.log('Mongo connected')
//     } catch(error) {
//         console.log(error)
//         process.exit()
//     }
// }

// module.exports = mongoDB;


//import MongoStore from 'connect-mongo';

// mongoose.connect("mongodb+srv://shivam:FakY4ekYN0j8OYgw@cluster0.60zdq2z.mongodb.net/?retryWrites=true&w=majority", {useNewUrlParser: true, useUnifiedTopology: true } )

// .then(() => console.log('Connected Successfully'))

// .catch((err) => { console.error(err); });