$(document).ready(function() {

    // Annoying Chatbot
    //==================================================================================================================

    $('#chatbot').on('click', '#chatbot-submit', function(e) {
        e.preventDefault();

        message = $('#chatbot-input').val();
        message = message.toLowerCase();
        sendMessage();
        bot(message);
        clearInterval(botAuto);
    });

    function botAutoMessage() {
        var messageArray = [
            'Вы ещё здесь?',
            'Вы на связи?',
            '?'
        ];

        sendMessage(messageArray);
    }

    var botAuto = setInterval(botAutoMessage, 30000);

    function bot(message) {
        if (message.indexOf('здравствуйте') >= 0) {

            var messageArray = [
                'Hello to you too!',
                'I said hello first :)',
                'Greeting, human.'
            ];

            sendMessage(messageArray);
        }

        // else if (message.indexOf('good morning') >= 0) {
        //
        //     var messageArray = [
        //         'Good morning to you too. How are you this morning?',
        //         'Yeah, its good ',
        //         'Greeting, human.'
        //     ];
        //
        //     sendMessage(messageArray);
        // }


        else if (message == '') {

            var messageArray = [
                'Вы прислали пустое сообщение',
                'Вы не ввели данных'
            ];

            sendMessage(messageArray);
        }

        else {

            var messageArray = [
                'Оставьте Ваш номер телефона и мы с Вами свяжемся',
            ];

            sendMessage(messageArray);

        }
    }

    // scroll to the bottom of chat box
    function scrollToMessage() {
        var msgBox = $('#chatbot-message');
        var height = msgBox[0].scrollHeight;
        msgBox.scrollTop(height);
    }

    // sending message
    function sendMessage(message) {
        if (message) {

            $('#chatbot-input').addClass('disabled');
            $('#chatbot-input').attr('disabled', 'disabled');
            $('#chatbot-submit').addClass('disabled');
            $('#chatbot-submit').attr('disabled', 'disabled');

            var respond = message[Math.floor(Math.random() * message.length)];

            setTimeout(function() {
                botPre     = '<span class="message">Врач печатает сообщение... <i class="glyphicon glyphicon-pencil"></i></span>';
                botVal     = respond;
                botMessage = $('#chatbot-message').html() + '<br><p class="from-bot"><span class="user">Врач: </span>' + botPre + '</p>';
                $('#chatbot-input').attr('placeholder', 'Врач печатает сообщение...');
                $('#chatbot-message').html(botMessage);
                scrollToMessage();
            }, 1000);

            setTimeout(function() {
                botMessageReplace = $('#chatbot-message .from-bot:last-child()');
                botMessage = '<span class="user">Врач: </span>' + botVal;
                $('#chatbot-input').attr('placeholder', 'Введите сообщение...');
                botMessageReplace.html(botMessage);
                scrollToMessage();
                $('#chatbot-input').removeClass('disabled');
                $('#chatbot-input').removeAttr('disabled');
                $('#chatbot-submit').removeClass('disabled');
                $('#chatbot-submit').removeAttr('disabled');
            }, 2800);

        } else {

            userVal     = $('#chatbot-input').val();
            userMessage = $('#chatbot-message').html() + '<br><p class="from-user"><span class="user">Вы: </span><span class="message">' + userVal + '</span></p>';
            $('#chatbot-message').html(userMessage);
            scrollToMessage();
            $('#chatbot-input').val('');

        }

    }

    // time
    var date = new Date();
    var now = ( date.getHours() + '.' + date.getMinutes() );
});


// по сабмиту собрать все данные чата в массив и отправить json