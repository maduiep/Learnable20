/*From the story line, Jacques is keeping track of his day-to-day activities to able to solve
his problem of transformation and what causes him to tranform occurently.
 */

// Below is the object that contains or keeps track of jacques day-to-day activities for Two weeks

const jacquesJournal = {

 day1: {
  events: ['work out', 'touch tree', 'eat pizza', 'sleep', 'wakeup']
 },
 day2: {
  events: ['cut grass', 'drink water', 'bath', 'eat noodle', 'walk home', 'take pills']
 },
 day3: {
  events: ['weekend', 'brushed teeth', 'knight gown', 'sleep off', 'peanuts', 'garri']
 },
 day4: {
  events: ['weekend', 'cycling', 'break', 'peanuts', 'beer', 'bath', 'eat noodle']
 },
 day5: {
  events: ['pizza', 'ice cream', 'cauliflower', 'lasagna', 'touched tree', 'brushed teeth']
 },
 day6: {
  events: ['weekend', 'cycling', 'break', 'beer', 'bath', 'eat noodle']
 },
 day7: {
  events: ['work out', 'touch tree', 'eat pizza', 'sleep', 'wakeup']
 },
 day8: {
  events: ['work out', 'touch tree', 'eat pizza', 'sleep', 'wakeup'],
 },
 day9: {
  events: ['cut grass', 'drink water', 'bath', 'eat noodle', 'walk home', 'take pills']
 },
 day10: {
  events: ['weekend', 'brushed teeth', 'knight gown', 'sleep off', 'peanuts', 'garri']
 },
 day11: {
  events: ['weekend', 'cycling', 'break', 'peanuts', 'beer', 'bath', 'eat noodle']
 },
 day12: {
  events: ['pizza', 'ice cream', 'cauliflower', 'lasagna', 'touched tree', 'brushed teeth']
 },
 day13: {
  events: ['weekend', 'cycling', 'break', 'beer', 'bath', 'eat noodle']
 },
 day14: {
  events: ['work out', 'touch tree', 'eat pizza', 'sleep', 'wakeup']
 }
};


function shouldTransform(day) {
 const events = day.events || [];
 //return events.some((event) => event.indexOf('pizza') !== -1);
 for (let i = 0; i < events.length; i++) {
  if (events[i].indexOf('pizza') !== -1) {
   return true
  } else {false }
 }
}


Object.keys(jacquesJournal).forEach((key, index) => {
 const day = jacquesJournal[key]
 const transformed = shouldTransform(day);
 const week = Math.floor(index / 7) + 1;
 //console.log(`Week ${week} ${key}: ${transformed ? 'Had pizza and transformed' : 'Did not transform'}`);
 if (transformed) {
  console.log(`Week ${week} ${key} Had Pizza and transformed`);
 } else {
  console.log(`Week ${week} ${key} Did not transform`);
 }
});
