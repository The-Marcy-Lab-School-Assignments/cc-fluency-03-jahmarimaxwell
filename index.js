
/* Problem 1: Write a function that logs all of the names 
of each user to the console

Example:
const users = [
  { name: 'Reuben',
    username: '@blood_pressure_killa',
    followers: 1,
    verified: false,
    bio: "It's an honor and a privilege."
  },
  { name: 'Laisha',
    username: '@passaic_papi',
    followers: 700,
    verified: true,
    bio: "My commute is longer than yours."
  }
 Output should be: Reuben, Laisha
 Data Structure: input: object
                 output: string
 Algorigthm: loop through objects and 
 console log each name to the console.

 */
 const logAllNames = (obj) => {
    obj.forEach((obj) => console.log(obj.name));
 }
 /* Problem 2: Write a function that logs all strings'
  that contain the 'name' or 'username' property and log
  each to the console.

  Example: const users = [
  { name: 'Reuben',
    username: '@blood_pressure_killa',
    followers: 1,
    verified: false,
    bio: "It's an honor and a privilege."
  },
  { name: 'Laisha',
    username: '@passaic_papi',
    followers: 700,
    verified: true,
    bio: "My commute is longer than yours."
  },
 ]
 Output should be: 'Hi my name is Reuben, and my tag is @blood_pressure_killa!',
  'Hi my name is Laisha, and my tag is @passaic_papi!'
  Data Structure: input: object;
                  output: string;
Algorigthm: loop through users object and and console log the names and
            username in a string.
*/
const getAllTags = (users) => {
    users.forEach((user) => console.log(`Hi my tag name is ${user.name}, and my tag is ${user.username}`));
  }
  getAllTags(users);

  const searchUsername = (users, searchTerm) => {
    return users.filter(({username}) => {
      if (username === searchTerm)
    )}
  }
  console.log(searchUsername(users, '@passaic_papi'))