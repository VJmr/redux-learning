import storeFactory from './store';
import { addDay, removeDay, setGoal, addError, clearError, changeSuggestions, clearSuggestions, randomGoals } from './actions';

const store = storeFactory()

store.dispatch(addDay("Heavenly", "2016-11-23", true, false));

// store.dispatch(removeDay("2016-11-23"));

// store.dispatch(setGoal(99));

// store.dispatch(addError("user not authorized"));

// store.dispatch(clearError(0));

// store.dispatch(changeSuggestions(["amazon", "flipkart", "alibaba"]));

// store.dispatch(clearSuggestions());

store.dispatch(
    randomGoals()
  )
  
  store.dispatch(
    randomGoals()
  )