import { createServer, Model } from "miragejs";

createServer({
  models: {
    user: Model,
    tweet: Model,
    thread: Model,
  },

  seeds(server) {
    server.create("user", {
      id: 1148,
      name: "Basonji",
      icon: "https://cdn-icons-png.flaticon.com/512/3442/3442468.png",
      bio: "js Dev from United States",
      subscriptionUserIds: [2345, 1324, 12, 165, 234],
      subscribedUserIds: [12, 1324, 165],
    });
    server.create("tweet", {
      id: 5461,
      user_id: 1148,
      thread: true,
      user_icon: "https://cdn-icons-png.flaticon.com/512/4086/4086559.png",
      user_name: "BASENJI",
      title: "Where does it come from?",
      text: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC. Latin professor at Hampden-Sydney College in Virginia, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.",
      caption: "BASENJI posted at 16:08 19.01.2022 from Kyiv",
    });
    server.create("tweet", {
      id: 5438,
      user_id: 1324,
      thread: false,
      user_icon: "https://cdn-icons-png.flaticon.com/512/949/949644.png",
      user_name: "Matt Diggity",
      title: "What is Lorem Ipsum?",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      caption: "Matt Diggity posted at 16:08 19.01.2023 from LA",
    });
    server.create("tweet", {
      id: 5460,
      user_id: 165,
      thread: false,
      user_icon: "https://cdn-icons-png.flaticon.com/512/4842/4842456.png",
      user_name: "Chris",
      title: "Matt Diggity remark",
      text: "People complain about SEO being more difficult than ever before. Yet we’ve never understood the algorithm more than we do today. What’s the difference between today’s winners and losers? Those who take action on that knowledge.",
      caption: "Chris posted at 16:08 19.01.2022 from London",
    });
    server.create("tweet", {
      id: 5432,
      user_id: 1148,
      thread: false,
      user_icon: "https://cdn-icons-png.flaticon.com/512/4086/4086609.png",
      user_name: "BASENJI",
      title: "Where does it come from?",
      text: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC. Latin professor at Hampden-Sydney College in Virginia, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.",
      caption: "BASENJI posted at 16:08 19.01.2022 from Kyiv",
    });
    server.create("tweet", {
      id: 5452,
      user_id: 1324,
      thread: true,
      user_icon: "https://cdn-icons-png.flaticon.com/512/949/949646.png",
      user_name: "Matt Diggity",
      title: "What is Lorem Ipsum?",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      caption: "Matt Diggity posted at 16:08 19.01.2023 from LA",
    });
    server.create("tweet", {
      id: 5431,
      user_id: 165,
      thread: false,
      user_icon: "https://cdn-icons-png.flaticon.com/512/1060/1060886.png",
      user_name: "Chris",
      title: "Matt Diggity remark",
      text: "People complain about SEO being more difficult than ever before. Yet we’ve never understood the algorithm more than we do today. What’s the difference between today’s winners and losers? Those who take action on that knowledge.",
      caption: "Chris posted at 16:08 19.01.2022 from London",
    });
    server.create("tweet", {
      id: 5433,
      user_id: 1148,
      thread: false,
      user_icon: "https://cdn-icons-png.flaticon.com/512/4086/4086559.png",
      user_name: "BASENJI",
      title: "Where does it come from?",
      text: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC. Latin professor at Hampden-Sydney College in Virginia, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.",
      caption: "BASENJI posted at 16:08 19.01.2022 from Kyiv",
    });
    server.create("tweet", {
      id: 5423,
      user_id: 1324,
      thread: false,
      user_icon: "https://cdn-icons-png.flaticon.com/512/3442/3442468.png",
      user_name: "Matt Diggity",
      title: "What is Lorem Ipsum?",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      caption: "Matt Diggity posted at 16:08 19.01.2023 from LA",
    });
    server.create("tweet", {
      id: 5462,
      user_id: 165,
      thread: false,
      user_icon: "https://cdn-icons-png.flaticon.com/512/1164/1164131.png",
      user_name: "Chris",
      title: "Matt Diggity remark",
      text: "People complain about SEO being more difficult than ever before. Yet we’ve never understood the algorithm more than we do today. What’s the difference between today’s winners and losers? Those who take action on that knowledge.",
      caption: "Chris posted at 16:08 19.01.2022 from London",
    });
    server.create("tweet", {
      id: 5434,
      user_id: 1148,
      thread: false,
      user_icon: "https://cdn-icons-png.flaticon.com/512/949/949646.png",
      user_name: "BASENJI",
      title: "Where does it come from?",
      text: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC. Latin professor at Hampden-Sydney College in Virginia, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.",
      caption: "BASENJI posted at 16:08 19.01.2022 from Kyiv",
    });
    server.create("thread", {
      id: 5461,
      messages: [
        {
          user_id: 165,
          icon: "https://cdn-icons-png.flaticon.com/512/949/949644.png",
          user_name: "Juliana",
          text: "People complain about SEO being more difficult than ever before.",
          caption: "Juliana posted at 14:23 17/04/22 from London",
          time_stump: 1680275922002,
        },
        {
          user_id: 1304,
          icon: "https://cdn-icons-png.flaticon.com/512/1164/1164131.png",
          user_name: "Abyssinian",
          text: "Latin professor at Hampden-Sydney College in Virginia, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.",
          caption: "Abyssinian posted at 10:00 22.03.2023 from Kyiv",
          time_stump: 1679509146000,
        },
      ],
    });
    server.create("thread", {
      id: 5452,
      messages: [
        {
          user_id: 165,
          icon: "https://cdn-icons-png.flaticon.com/512/3442/3442468.png",
          text: "People complain about SEO being more difficult than ever before.",
          caption: "Juliana posted at 14:23 17/04/22 from London",
          time_stump: 1680275922002,
        },
      ],
    });
  },
  routes() {
    this.urlPrefix = "http://localhost:3000";
    this.namespace = "api";
    const users = [
      {
        id: 1148,
        name: "Basonji",
        icon: "https://cdn-icons-png.flaticon.com/512/3442/3442468.png",
        bio: "js Dev from United States",
        subscriptions: [2345, 1324, 12, 165, 234],
        subscribed: [12, 1324, 165],
      },
      {
        id: 1324,
        name: "Chris",
        icon: "https://cdn-icons-png.flaticon.com/512/2423/2423896.png",
        bio: "me",
        subscriptions: [1148],
        subscribed: [12, 1148, 165],
      },
      {
        id: 165,
        name: "Juliana",
        icon: "https://cdn-icons-png.flaticon.com/512/4842/4842456.png",
        bio: "you",
        subscriptions: [1324, 1148],
        subscribed: [1148],
      },
    ];
    const recommendedUsers = [
      {
        id: 165,
        name: "Juliana",
        icon: "https://cdn-icons-png.flaticon.com/512/8055/8055921.png",
      },
      {
        id: 1304,
        name: "National Geographic",
        icon: "https://icons.veryicon.com/png/o/miscellaneous/two-color-icon-library/user-286.png",
      },
      {
        id: 1065,
        name: "Jane Dou",
        icon: "https://cdn-icons-png.flaticon.com/512/4086/4086559.png",
      },
    ];

    const notifacations = [
      {
        message_id: 1148,
        messages: [
          {
            id: 1342,
            user_id: 165,
            icon: "https://cdn-icons-png.flaticon.com/512/949/949644.png",
            title: "What is Lorem Ipsum?",
            text: "People complain about SEO being more difficult than ever before.",
            caption: "Juliana posted at 14:23 17/04/22 from London",
            time_stump: 1680275922002,
          },
          {
            id: 234234,
            user_id: 1304,
            icon: "https://cdn-icons-png.flaticon.com/512/4086/4086609.png",
            title: "Where does it come from?",
            text: "Latin professor at Hampden-Sydney College in Virginia, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.",
            caption: "Abyssinian posted at 10:00 22.03.2023 from Kyiv",
            time_stump: 1679509146000,
          },
          {
            id: 3444,
            user_id: 1304,
            lable: true,
            icon: "https://cdn-icons-png.flaticon.com/512/8055/8055921.png",
            title: "What is Lorem Ipsum?",
            text: "Virginia from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.",
            caption: "Abyssinian posted at 16:18 31.03.2023 from Kyiv",
            time_stump: 1680286746000,
          },
        ],
      },
    ];

    this.get("/tweets", (schema) => {
      return schema.tweets.all();
    });

    let newId = 5463;
    this.post("/tweets", (schema, request) => {
      let attrs = JSON.parse(request.requestBody);
      attrs.id = newId++;

      return schema.tweets.create(attrs);
    });

    this.get("/recommended-users/", () => {
      return recommendedUsers;
    });

    this.get("/thread/:id", (schema, res) => {
      const id = res.params.id;
      const threadInfo = schema.threads.find(id);
      const thread = threadInfo?.messages;

      return thread?.length !== 0 ? thread : console.log(`thread not found`);
    });

    this.get("/getNotifications/:id", (req, res) => {
      const id = res.params.id;
      const notifications = notifacations.find((el) => el.message_id == id);
      const result = notifications?.messages;

      return result?.length !== 0 ? result : false;
    });

    this.get("/user/:id", (schema, res) => {
      const id = res.params.id;
      const userInfo = schema.users.find(id);
      const user = {
        name: userInfo.name,
        icon: userInfo.icon,
        bio: userInfo.bio,
        subscriptions: userInfo.subscriptionUserIds,
        subscribed: userInfo.subscribedUserIds,
      };

      return Object.keys(user).length > 0
        ? user
        : console.log(`user ${id} not found`);
    });

    this.post("/login", (schema, res) => {

      return {token: 'test123'}
    })

    this.passthrough("https://ipgeolocation.abstractapi.com/v1/");
  },
});
