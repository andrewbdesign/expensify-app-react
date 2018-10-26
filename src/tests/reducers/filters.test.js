import filtersReducer from '../../reducers/filters'
import moment from 'moment'

test('should setup default filter values', () => {
    const state = filtersReducer(undefined, { type:'@@INIT' })
    expect(state).toEqual({
        text: '',
        sortBy: 'date',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    })
})

test('should set sort by to amount', () => {
    const state = filtersReducer(undefined, { 'type': 'SORT_BY_AMOUNT'})
    expect(state.sortBy).toEqual('amount')
})

test('should set sort by to date', () => {
    const currentState = {
        text: '',
        startDate: undefined,
        endDate: undefined,
        sortBy: 'amount'
    }
    const action = { 'type': 'SORT_BY_DATE'}
    const state = filtersReducer(currentState, action)
    expect(state.sortBy).toEqual('date')
})

test('should set text filter', () => {
    const text = 'hello andrew'
    const action = { 
        'type': 'SET_TEXT_FILTER', 
        text
    }
    const state = filtersReducer(undefined, action)
    expect(state.text).toEqual(text)
})

test('should set startDate filter', () => {
    const startDate = moment()
    const action = {
        type: 'SET_START_DATE', 
        startDate 
    }
    const state = filtersReducer(undefined, action)
    expect(state.startDate).toEqual(startDate)

})

test('should set endDate filter', () => {
    const endDate = moment()
    const action = {
        type: 'SET_END_DATE', 
        endDate 
    }
    const state = filtersReducer(undefined, action)
    expect(state.endDate).toEqual(endDate)
})