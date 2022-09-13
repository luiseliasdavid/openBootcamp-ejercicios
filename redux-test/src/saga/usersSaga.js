import {call, put , takeEvery} from 'redux-saga/effects'
import {getUsers} from '../features/counter/usersSlice'


function* workerGetUser(email,password){
    const users = yield call(()=>'https://reqres.in/api/login')
    console.log(users)
}

function* usersSaga(){
    yield takeEvery(getUsers, workerGetUser )
}