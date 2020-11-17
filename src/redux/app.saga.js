import { takeLatest, delay, put, take, takeEvery } from "redux-saga/effects";

export function* onIncrement() {
  console.log("I am incremented");
  yield delay(3000);
  yield put({ type: "INCREMENT_FROM_SAGA" });
}

export function* incrementSaga() {
  yield takeEvery("INCREMENT", onIncrement);
}

// export function* incrementSaga() {
//   while (true) {
//     yield take("INCREMENT");
//     yield console.log("I am incremented");
//     yield delay(3000);
//     yield put({ type: "INCREMENT_FROM_SAGA" });
//   }
// }
