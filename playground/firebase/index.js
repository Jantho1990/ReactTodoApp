import firebase from 'firebase'

// Initialize Firebase
var config = {
  apiKey: "AIzaSyAiNJz07svIWoOprErxr8stXckQVaTm9q4",
  authDomain: "reacttodoapp-2ddec.firebaseapp.com",
  databaseURL: "https://reacttodoapp-2ddec.firebaseio.com",
  projectId: "reacttodoapp-2ddec",
  storageBucket: "reacttodoapp-2ddec.appspot.com",
  messagingSenderId: "146145887591"
};
firebase.initializeApp(config);

let firebaseRef = firebase.database().ref()
firebaseRef.set({
  app: {
    name: 'ReactTodoApp',
    version: '1.0.1'
  },
  isRunning: true,
  user: {
    name: 'Josh',
    age: 27
  }
})

/* let todosRef = firebaseRef.child('todos')

todosRef.on('child_added', snapshot => console.log('child_added', snapshot.key, snapshot.val()))

todosRef.push({
  text: 'finish lesson'
})

todosRef.push({
  text: 'finish challenge'
}) */

/* let notesRef = firebaseRef.child('notes')

notesRef.on('child_added', snapshot => console.log('child added', snapshot.key, snapshot.val()))
notesRef.on('child_changed', snapshot => console.log('child changed', snapshot.key, snapshot.val()))
notesRef.on('child_removed', snapshot => console.log('child removed', snapshot.key, snapshot.val()))

let newNoteRef = notesRef.push({
  text: 'finish react tuts tonight!'
})

console.log('todo id', newNoteRef.key) */

/* newNoteRef.set({
  text: 'finish react tuts tonight'
}) */

/* firebaseRef.child('user').on('value', (snapshot) => {
  console.log('update user', snapshot.val())
})

firebaseRef.child('app').update({name: 'Pizza Mac'})
firebaseRef.child('user').update({name: 'Fortune Sellers'}) */

/* firebaseRef.on('value', (snapshot) => {
  console.log('got the value', snapshot.val())
})

firebaseRef.update({isRunning: false})

firebaseRef.off()

firebaseRef.update({isRunning: true})

let logData = (snapshot) => {
  console.log('got another val', snapshot.val())
}

firebaseRef.on('value', logData)

firebaseRef.off() */

/* firebaseRef.child('app').once('value').then((snapshot) => {
  console.log('whole db', snapshot.key, snapshot.val())
}, (e) => {
  console.log('fail', e)
}) */

/* firebaseRef.update({
  isRunning: null
})

firebaseRef.child('user/age').remove() */

/* firebaseRef.child('app').update({
  version: '2.0.1',
  name: null // Same as delete
}) */

// firebaseRef.child('app/name').remove()

// firebaseRef.remove()

/* firebaseRef.child('app').update({
  name: 'Estupido'
})

firebaseRef.child('user').update({
  name: 'Farkles'
}) */

/* firebaseRef.update({
  'app/name': 'Some Dumb Name',
  'user/name': 'Stupid Person'
}) */

/* firebaseRef.update({
  isRunning: false,
  'app/version': '1.0.2'
})

firebaseRef.child('app').update({
  name: 'TodoApp'
}) */

/* .then(() => {
  console.log('success')
}, e => {
  console.log('set failed')
})

// firebaseRef.set({
//   appName: 'Shark fin',
// })

firebaseRef.child('app').set({
  name: 'Josh\'s Amazing Contraption',
}) */