/*
============================================
; Title:  header.js
; Author: Professor Krasso 
; Date:   3 December 2019
; Modified By: Micah Connelly
; Description: Displays a formatted header
;===========================================
*/

/**
 * Params: firstName, lastName, assignment
 * Response: output 
 * Description: Returns a well-formatted string header
 */

exports.display = function (firstName, lastName, assignment) {
    let output = '\n' + firstName + ' ' + lastName + '\n' + assignment + '\nDate: ' + new Date().toLocaleDateString('en-US') + '\n'
    return output
}