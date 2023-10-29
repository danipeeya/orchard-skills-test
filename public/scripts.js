$(document).ready(function () {
    $('.img-fluid').on('click', function () {
        var src = $(this).data('src');
        console.log("element clicked: ", src);
        $('#modalImage').attr('src', src);
    });

    $('#imageModal').on('hidden.bs.modal', function () {
        // Reset the modal image src when the modal is closed
        $('#modalImage').attr('src', '');
    });
});