
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('reviews').del()
    .then(function () {
      // Inserts seed entries
      return knex('reviews').insert([{
        "title": "Pellentesque viverra pede ac diam.",
        "body": "Morbi ut odio.",
        "reviewer_id": 47,
        "business_id": 70
      }, {
        "title": "Morbi non quam nec dui luctus rutrum.",
        "body": "Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus.",
        "reviewer_id": 57,
        "business_id": 68
      }, {
        "title": "Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.",
        "body": "Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti. Nullam porttitor lacus at turpis.",
        "reviewer_id": 33,
        "business_id": 2
      }, {
        "title": "Vivamus in felis eu sapien cursus vestibulum.",
        "body": "In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.",
        "reviewer_id": 106,
        "business_id": 76
      }, {
        "title": "Nulla justo.",
        "body": "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis. Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor.",
        "reviewer_id": 38,
        "business_id": 7
      }, {
        "title": "Donec ut dolor.",
        "body": "In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus. Nulla ut erat id mauris vulputate elementum. Nullam varius.",
        "reviewer_id": 97,
        "business_id": 37
      }, {
        "title": "Mauris lacinia sapien quis libero.",
        "body": "Nulla justo. Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros.",
        "reviewer_id": 109,
        "business_id": 33
      }, {
        "title": "Nulla nisl.",
        "body": "Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est. Phasellus sit amet erat. Nulla tempus.",
        "reviewer_id": 28,
        "business_id": 54
      }, {
        "title": "Suspendisse potenti.",
        "body": "Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.",
        "reviewer_id": 13,
        "business_id": 49
      }, {
        "title": "In sagittis dui vel nisl.",
        "body": "Nulla mollis molestie lorem.",
        "reviewer_id": 96,
        "business_id": 56
      }, {
        "title": "Cras non velit nec nisi vulputate nonummy.",
        "body": "Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus.",
        "reviewer_id": 82,
        "business_id": 65
      }, {
        "title": "Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl.",
        "body": "Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla.",
        "reviewer_id": 82,
        "business_id": 27
      }, {
        "title": "Sed ante.",
        "body": "Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci.",
        "reviewer_id": 7,
        "business_id": 81
      }, {
        "title": "Integer tincidunt ante vel ipsum.",
        "body": "Suspendisse potenti. Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
        "reviewer_id": 81,
        "business_id": 32
      }, {
        "title": "Suspendisse potenti.",
        "body": "Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.",
        "reviewer_id": 106,
        "business_id": 1
      }, {
        "title": "Suspendisse accumsan tortor quis turpis.",
        "body": "In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue.",
        "reviewer_id": 63,
        "business_id": 32
      }, {
        "title": "In blandit ultrices enim.",
        "body": "Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.",
        "reviewer_id": 87,
        "business_id": 81
      }, {
        "title": "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi.",
        "body": "Fusce consequat. Nulla nisl. Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus.",
        "reviewer_id": 84,
        "business_id": 55
      }, {
        "title": "Quisque id justo sit amet sapien dignissim vestibulum.",
        "body": "Donec posuere metus vitae ipsum.",
        "reviewer_id": 11,
        "business_id": 63
      }, {
        "title": "In hac habitasse platea dictumst.",
        "body": "Mauris sit amet eros.",
        "reviewer_id": 45,
        "business_id": 99
      }, {
        "title": "Donec vitae nisi.",
        "body": "Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.",
        "reviewer_id": 59,
        "business_id": 54
      }, {
        "title": "Morbi porttitor lorem id ligula.",
        "body": "Donec dapibus. Duis at velit eu est congue elementum.",
        "reviewer_id": 23,
        "business_id": 4
      }, {
        "title": "Nunc rhoncus dui vel sem.",
        "body": "Nulla justo. Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis. Sed ante.",
        "reviewer_id": 35,
        "business_id": 74
      }, {
        "title": "In est risus, auctor sed, tristique in, tempus sit amet, sem.",
        "body": "Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl.",
        "reviewer_id": 89,
        "business_id": 29
      }, {
        "title": "Morbi ut odio.",
        "body": "Aliquam erat volutpat. In congue.",
        "reviewer_id": 12,
        "business_id": 68
      }, {
        "title": "In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.",
        "body": "Duis mattis egestas metus. Aenean fermentum.",
        "reviewer_id": 22,
        "business_id": 53
      }, {
        "title": "Vestibulum sed magna at nunc commodo placerat.",
        "body": "Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus.",
        "reviewer_id": 87,
        "business_id": 97
      }, {
        "title": "Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci.",
        "body": "Donec semper sapien a libero.",
        "reviewer_id": 44,
        "business_id": 97
      }, {
        "title": "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est.",
        "body": "Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus. Phasellus in felis.",
        "reviewer_id": 12,
        "business_id": 18
      }, {
        "title": "Praesent blandit.",
        "body": "Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat. In congue. Etiam justo. Etiam pretium iaculis justo.",
        "reviewer_id": 24,
        "business_id": 90
      }, {
        "title": "Pellentesque eget nunc.",
        "body": "Fusce consequat. Nulla nisl. Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa.",
        "reviewer_id": 65,
        "business_id": 25
      }, {
        "title": "Proin risus.",
        "body": "Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus. Phasellus in felis. Donec semper sapien a libero.",
        "reviewer_id": 36,
        "business_id": 8
      }, {
        "title": "Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci.",
        "body": "Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.",
        "reviewer_id": 80,
        "business_id": 42
      }, {
        "title": "Duis consequat dui nec nisi volutpat eleifend.",
        "body": "Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl.",
        "reviewer_id": 64,
        "business_id": 75
      }, {
        "title": "Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante.",
        "body": "Duis at velit eu est congue elementum. In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante.",
        "reviewer_id": 91,
        "business_id": 68
      }, {
        "title": "Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.",
        "body": "Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.",
        "reviewer_id": 69,
        "business_id": 11
      }, {
        "title": "Nam tristique tortor eu pede.",
        "body": "Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.",
        "reviewer_id": 16,
        "business_id": 96
      }, {
        "title": "Nulla mollis molestie lorem.",
        "body": "Vestibulum rutrum rutrum neque. Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia.",
        "reviewer_id": 17,
        "business_id": 3
      }, {
        "title": "Pellentesque viverra pede ac diam.",
        "body": "Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti.",
        "reviewer_id": 98,
        "business_id": 68
      }, {
        "title": "Etiam vel augue.",
        "body": "Curabitur convallis.",
        "reviewer_id": 67,
        "business_id": 76
      }, {
        "title": "Praesent blandit.",
        "body": "Aenean auctor gravida sem.",
        "reviewer_id": 90,
        "business_id": 37
      }, {
        "title": "Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.",
        "body": "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque. Duis bibendum. Morbi non quam nec dui luctus rutrum.",
        "reviewer_id": 104,
        "business_id": 23
      }, {
        "title": "Donec posuere metus vitae ipsum.",
        "body": "Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat. In congue.",
        "reviewer_id": 42,
        "business_id": 1
      }, {
        "title": "Vivamus tortor.",
        "body": "Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.",
        "reviewer_id": 98,
        "business_id": 55
      }, {
        "title": "Vivamus tortor.",
        "body": "Sed ante.",
        "reviewer_id": 95,
        "business_id": 66
      }, {
        "title": "Nulla justo.",
        "body": "Nulla nisl. Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa.",
        "reviewer_id": 90,
        "business_id": 15
      }, {
        "title": "Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue.",
        "body": "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.",
        "reviewer_id": 8,
        "business_id": 49
      }, {
        "title": "Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.",
        "body": "Suspendisse potenti. Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum.",
        "reviewer_id": 65,
        "business_id": 66
      }, {
        "title": "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
        "body": "In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.",
        "reviewer_id": 20,
        "business_id": 32
      }, {
        "title": "Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante.",
        "body": "Nulla ut erat id mauris vulputate elementum. Nullam varius.",
        "reviewer_id": 79,
        "business_id": 74
      }, {
        "title": "Morbi non quam nec dui luctus rutrum.",
        "body": "Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.",
        "reviewer_id": 35,
        "business_id": 21
      }, {
        "title": "Nunc nisl.",
        "body": "Curabitur convallis. Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis.",
        "reviewer_id": 42,
        "business_id": 2
      }, {
        "title": "Ut tellus.",
        "body": "Maecenas rhoncus aliquam lacus.",
        "reviewer_id": 71,
        "business_id": 1
      }, {
        "title": "In hac habitasse platea dictumst.",
        "body": "Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.",
        "reviewer_id": 55,
        "business_id": 41
      }, {
        "title": "Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.",
        "body": "Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.",
        "reviewer_id": 14,
        "business_id": 98
      }, {
        "title": "Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue.",
        "body": "Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem. Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci.",
        "reviewer_id": 2,
        "business_id": 83
      }, {
        "title": "Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante.",
        "body": "Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia.",
        "reviewer_id": 54,
        "business_id": 16
      }, {
        "title": "Cras non velit nec nisi vulputate nonummy.",
        "body": "Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus. Phasellus in felis.",
        "reviewer_id": 62,
        "business_id": 71
      }, {
        "title": "Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.",
        "body": "Integer ac neque. Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus. In sagittis dui vel nisl.",
        "reviewer_id": 39,
        "business_id": 83
      }, {
        "title": "Praesent id massa id nisl venenatis lacinia.",
        "body": "Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius. Integer ac leo. Pellentesque ultrices mattis odio.",
        "reviewer_id": 14,
        "business_id": 89
      }, {
        "title": "Donec ut mauris eget massa tempor convallis.",
        "body": "Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat.",
        "reviewer_id": 22,
        "business_id": 3
      }, {
        "title": "Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo.",
        "body": "Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.",
        "reviewer_id": 41,
        "business_id": 36
      }, {
        "title": "Nunc rhoncus dui vel sem.",
        "body": "Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat. Praesent blandit.",
        "reviewer_id": 7,
        "business_id": 98
      }, {
        "title": "In est risus, auctor sed, tristique in, tempus sit amet, sem.",
        "body": "Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci.",
        "reviewer_id": 90,
        "business_id": 97
      }, {
        "title": "Etiam vel augue.",
        "body": "Nulla facilisi. Cras non velit nec nisi vulputate nonummy.",
        "reviewer_id": 36,
        "business_id": 17
      }, {
        "title": "Nulla ut erat id mauris vulputate elementum.",
        "body": "Donec dapibus. Duis at velit eu est congue elementum. In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante.",
        "reviewer_id": 42,
        "business_id": 42
      }, {
        "title": "Quisque porta volutpat erat.",
        "body": "Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.",
        "reviewer_id": 67,
        "business_id": 16
      }, {
        "title": "In hac habitasse platea dictumst.",
        "body": "Praesent id massa id nisl venenatis lacinia.",
        "reviewer_id": 13,
        "business_id": 98
      }, {
        "title": "Nullam varius.",
        "body": "Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.",
        "reviewer_id": 52,
        "business_id": 44
      }, {
        "title": "Vestibulum sed magna at nunc commodo placerat.",
        "body": "Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.",
        "reviewer_id": 109,
        "business_id": 10
      }, {
        "title": "Integer ac leo.",
        "body": "Donec posuere metus vitae ipsum. Aliquam non mauris. Morbi non lectus.",
        "reviewer_id": 65,
        "business_id": 41
      }, {
        "title": "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi.",
        "body": "Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.",
        "reviewer_id": 100,
        "business_id": 88
      }, {
        "title": "Nulla nisl.",
        "body": "Duis mattis egestas metus. Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.",
        "reviewer_id": 43,
        "business_id": 68
      }, {
        "title": "Nam nulla.",
        "body": "Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam. Nam tristique tortor eu pede.",
        "reviewer_id": 40,
        "business_id": 45
      }, {
        "title": "Maecenas pulvinar lobortis est.",
        "body": "Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo.",
        "reviewer_id": 53,
        "business_id": 25
      }, {
        "title": "Curabitur at ipsum ac tellus semper interdum.",
        "body": "Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus. Phasellus in felis.",
        "reviewer_id": 12,
        "business_id": 69
      }, {
        "title": "Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci.",
        "body": "Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.",
        "reviewer_id": 24,
        "business_id": 67
      }, {
        "title": "Morbi non quam nec dui luctus rutrum.",
        "body": "Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum.",
        "reviewer_id": 45,
        "business_id": 89
      }, {
        "title": "Proin at turpis a pede posuere nonummy.",
        "body": "Duis consequat dui nec nisi volutpat eleifend.",
        "reviewer_id": 80,
        "business_id": 43
      }, {
        "title": "Donec ut dolor.",
        "body": "Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat. In congue. Etiam justo.",
        "reviewer_id": 73,
        "business_id": 93
      }, {
        "title": "Etiam vel augue.",
        "body": "Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum. In hac habitasse platea dictumst.",
        "reviewer_id": 99,
        "business_id": 58
      }, {
        "title": "Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla.",
        "body": "Donec posuere metus vitae ipsum. Aliquam non mauris.",
        "reviewer_id": 98,
        "business_id": 71
      }, {
        "title": "Morbi a ipsum.",
        "body": "Vestibulum sed magna at nunc commodo placerat. Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.",
        "reviewer_id": 62,
        "business_id": 24
      }, {
        "title": "Integer tincidunt ante vel ipsum.",
        "body": "Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat.",
        "reviewer_id": 26,
        "business_id": 58
      }, {
        "title": "Aliquam erat volutpat.",
        "body": "Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros.",
        "reviewer_id": 16,
        "business_id": 99
      }, {
        "title": "Curabitur convallis.",
        "body": "Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue.",
        "reviewer_id": 92,
        "business_id": 71
      }, {
        "title": "Vivamus in felis eu sapien cursus vestibulum.",
        "body": "Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat.",
        "reviewer_id": 14,
        "business_id": 99
      }, {
        "title": "Proin interdum mauris non ligula pellentesque ultrices.",
        "body": "Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
        "reviewer_id": 46,
        "business_id": 54
      }, {
        "title": "Nunc purus.",
        "body": "Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo.",
        "reviewer_id": 61,
        "business_id": 37
      }, {
        "title": "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
        "body": "Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.",
        "reviewer_id": 54,
        "business_id": 75
      }, {
        "title": "Morbi vel lectus in quam fringilla rhoncus.",
        "body": "Praesent lectus. Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio.",
        "reviewer_id": 43,
        "business_id": 57
      }, {
        "title": "Proin at turpis a pede posuere nonummy.",
        "body": "Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.",
        "reviewer_id": 88,
        "business_id": 4
      }, {
        "title": "Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue.",
        "body": "Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus. Pellentesque at nulla. Suspendisse potenti.",
        "reviewer_id": 82,
        "business_id": 56
      }, {
        "title": "Suspendisse potenti.",
        "body": "Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante.",
        "reviewer_id": 59,
        "business_id": 62
      }, {
        "title": "In est risus, auctor sed, tristique in, tempus sit amet, sem.",
        "body": "Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum. Proin eu mi. Nulla ac enim.",
        "reviewer_id": 82,
        "business_id": 89
      }, {
        "title": "In eleifend quam a odio.",
        "body": "Fusce consequat. Nulla nisl. Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa.",
        "reviewer_id": 54,
        "business_id": 96
      }, {
        "title": "Duis aliquam convallis nunc.",
        "body": "Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh. In quis justo.",
        "reviewer_id": 76,
        "business_id": 69
      }, {
        "title": "Praesent blandit.",
        "body": "Morbi quis tortor id nulla ultrices aliquet.",
        "reviewer_id": 59,
        "business_id": 77
      }, {
        "title": "Morbi quis tortor id nulla ultrices aliquet.",
        "body": "Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum.",
        "reviewer_id": 83,
        "business_id": 8
      }, {
        "title": "Morbi non quam nec dui luctus rutrum.",
        "body": "Donec semper sapien a libero. Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.",
        "reviewer_id": 58,
        "business_id": 9
      }]);
    });
};
