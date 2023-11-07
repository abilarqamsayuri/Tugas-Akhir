import React from 'react';

const Todo = () => {
    main()
    return (
        <div>
            <h2>Check in your console</h2>
        </div>
    );
}

// Jangan mengubah apapun pada function main
const main = () => {
    console.log("# Get All Users");
    all()

    console.log("# Add New User: Sabiq");
    const newUser = {
        name: "Sabiq",
        age: 20,
        major: "Informatics"
    };
    store(newUser)

    console.log("# Edit User: Dafa")
    const editedUser = {
        name: "Isfhani Ghiyath",
        age: 23,
        major: "English",
    }
    update(1, editedUser)

    console.log("# Delete User: Rian");
    destroy(2)
}


// TODO 1 - Buatlah array of object users (5 users)
// Objek memiliki property: name, age, major
// Gunakan const untuk membuat variabel
const users = [
    {name : "Aulia", age: 15, major: "Arsitecture"},
    {name : "Dafa", age: 17, major: "Arabic"},
    {name : "Rian", age: 19, major: "Law"},
    {name : "Arul", age: 17, major: "civil Engineering"},
    {name : "Rafa", age: 16, major: "Arabic"},
]

// TODO 2 - Membuat function yang menampilkan semua data users
// Gunakan for/for-of
const all = () => {
    for (const all of users) {
        console.log(all)
    }
}

// TODO 3 - Membuat function untuk menambahkan data users
// Gunakan metode push
const store = (user) => {
    users.push(user)
    console.log(user)
};


// TODO 4 - Membuat function untuk mengupdate data users
// Ganti data users berdasarkan index pada array
const update = (index, user) => {
    if (index >= 0 && index < users.length){
        users[index] = user;
    }
    console.log(user)
    
}

// TODO 5 - Membuat function untuk menghapus data users berdasarkan index
// Gunakan metode splice
const destroy = (index) => {
    if (index >= 0 && index < users.length) {
        users.splice(index, 1);
    }
    console.log(index)
}

export default Todo;
