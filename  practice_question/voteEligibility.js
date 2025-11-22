function voteEligibility(age) {
    let eligibilityCriteria = age >= 18;
    if (eligibilityCriteria) {
        return true
    } else {
        return false
    }
}


let userIsEligible = voteEligibility(20);

if (!userIsEligible) {
    console.log("you are not eligible to vote")
} else {
    console.log("you are eligible for vote")
}
