export interface Users{
    additionalUserInfo:{
    profile  : {
        age_range:{
            min: Number,
            max :Number
        },
        email: String,
        first_name: String,
        last_name: String,
        id: String,
        name: String,
        picture:{
            data:{
                height: Number,
                url: String,
                width: Number
            }
        }
    }
    }
}