#Tournament Winner Function

Description:

The tournamentWinner function takes in two inputs:

competitions: An array of arrays, where each sub-array contains two teams that compete against each other.
results: An array of integers, where each element represents the result of the corresponding match in competitions. If the result is 1, the first team in the sub-array won the match. If the result is 0, the second team won the match.
The function calculates which team won the tournament by summing up points for each team. A team receives 3 points for each match it wins. The function returns the name of the team with the most points at the end of the tournament.

Function Signature:

	function tournamentWinner(competitions, results)
 
Parameters:

competitions: An array of arrays, where each sub-array contains two teams that compete. Example: [["TeamA", "TeamB"], ["TeamC", "TeamA"]].

results: An array of integers that specifies the result of each competition. A value of 1 indicates that the first team in the corresponding competition won, and 0 indicates that the second team won.

Return Value:
The function returns a string, which is the name of the team that won the most points during the tournament.

How It Works:
1. The function creates an empty object pointTable to store the points for each team.
2. It iterates through each competition, determining the winner based on the results array.
3. For each match, it updates the pointTable by adding 3 points to the winning team.
4. It keeps track of the team with the highest score by comparing each team's points with the current maximum (max).
5. At the end of the iteration, the function returns the team with the most points.

Time Complexity:
O(n): The function iterates through the competitions array once, where n is the length of the competitions array.

Example Usage:

	const competitions = [
	  ["TeamA", "TeamB"],
	  ["TeamC", "TeamA"],
	  ["TeamB", "TeamC"]
	];		
	const results = [0, 1, 1];

	console.log(tournamentWinner(competitions, results));  // Output: "TeamB"

In the above example:

TeamB wins the first and last matches, earning a total of 6 points.
TeamA wins the second match, earning 3 points.
TeamB has the most points and is returned as the winner.

Edge Cases:
If all teams win the same number of matches, the function will return the team that reached the maximum points first.
If a team plays only one match but wins, it will still be considered for the maximum points.
