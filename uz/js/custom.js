$(function() {

    var albums = ['album_1', 'album_2', 'album_3', 'album_4', 'album_5', 'album_6'];
    var album_1 = ['4.jpg', '5.jpg', '6.jpg', '7.jpg', '8.jpg', '9.jpg'];
    var album_2 = ['10.jpg', '11.jpg', '12.jpg', '13.jpg', '14.jpg', '15.jpg'];
    var album_3 = ['16.jpg', '17.jpg', '18.jpg', '19.jpg', '20.jpg', '21.jpg'];
    var album_4 = ['22.jpg', '23.jpg', '24.jpg', '25.jpg', '26.jpg', '27.jpg'];
    var album_5 = ['28.jpg', '29.jpg', '30.jpg', '31.jpg', '32.jpg', '33.jpg'];
    var album_6 = ['34.jpg', '35.jpg', '36.jpg', '37.jpg', '38.jpg', '39.jpg'];
    var album_1_count = album_2_count = album_3_count = album_4_count = album_5_count = album_6_count = 0;
    var album_id = '';

    $('.magnet_parts img').click(function() {

        album_id = $(this).attr('id');
        $('#album .modal-content').empty();
        $('#album .modal-content').append('<div id="' + album_id + '" class="fotorama" data-nav="thumbs"></div>');
        $('#album').modal('show');

    });

    $('#album').on('show.bs.modal', function(e) {

        switch (album_id) {
            case 'album_1':
                album_1.forEach(function(elem) {
                    $('#album .fotorama').append('<img src="img/album_1/' + elem + '">');
                });
                break;
            case 'album_2':
                album_2.forEach(function(elem) {
                    $('#album .fotorama').append('<img src="img/album_2/' + elem + '">');
                });
                break;
            case 'album_3':
                album_3.forEach(function(elem) {
                    $('#album .fotorama').append('<img src="img/album_3/' + elem + '">');
                });
                break;
            case 'album_4':
                album_4.forEach(function(elem) {
                    $('#album .fotorama').append('<img src="img/album_4/' + elem + '">');
                });
                break;
            case 'album_5':
                album_5.forEach(function(elem) {
                    $('#album .fotorama').append('<img src="img/album_5/' + elem + '">');
                });
                break;
            case 'album_6':
                album_6.forEach(function(elem) {
                    $('#album .fotorama').append('<img src="img/album_6/' + elem + '">');
                });
                break;
        }
        $('.fotorama').fotorama();
        $('.fotorama').on(
            'fotorama:showend',
            function(e, fotorama, extra) {
                switch (album_id) {
                    case 'album_1':
                        album_1_count++;
                        if (album_1_count == 4) {
                            $('#remind').modal({
                                keyboard: false,
                                backdrop: 'static'
                            });
                        }
                        break;
                    case 'album_2':
                        album_2_count++;
                        if (album_2_count == 4) {
                            $('#remind').modal({
                                keyboard: false,
                                backdrop: 'static'
                            });
                        }
                        break;
                    case 'album_3':
                        album_3_count++;
                        if (album_3_count == 4) {
                            $('#remind').modal({
                                keyboard: false,
                                backdrop: 'static'
                            });
                        }
                        break;
                    case 'album_4':
                        album_4_count++;
                        if (album_4_count == 4) {
                            $('#remind').modal({
                                keyboard: false,
                                backdrop: 'static'
                            });
                        }
                        break;
                    case 'album_5':
                        album_5_count++;
                        if (album_5_count == 4) {
                            $('#remind').modal({
                                keyboard: false,
                                backdrop: 'static'
                            });
                        }
                        break;
                    case 'album_6':
                        album_6_count++;
                        if (album_6_count == 4) {
                            $('#remind').modal({
                                keyboard: false,
                                backdrop: 'static'
                            });
                        }
                        break;
                }
            }
        );
    });

    $('#remind').on('show.bs.modal', function(e) {
        var height = $('#album .modal-content').height();
        $('#remind .modal-content').height(height);
    });

    $('#remind .btn').click(function() {
        $('#remind').modal('hide');
        $('#album').modal('hide');
    });

});
