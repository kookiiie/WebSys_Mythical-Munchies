document.addEventListener('DOMContentLoaded', function() {
    const upvoteButton = document.getElementById('upvote');
    const downvoteButton = document.getElementById('downvote');
    const voteCount = document.querySelector('.votes span');

    let currentVotes = parseInt(voteCount.textContent);

    upvoteButton.addEventListener('click', function() {
        currentVotes++;
        voteCount.textContent = currentVotes;
        // Here you can add further logic, e.g., updating server-side data via AJAX
    });

    downvoteButton.addEventListener('click', function() {
        currentVotes--;
        voteCount.textContent = currentVotes;
        // Additional logic can be added as needed
    });
});
