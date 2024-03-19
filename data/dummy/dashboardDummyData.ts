import {
  LocationVisitorData,
  PerformanceMetricData,
  PostActivityData,
} from "../dashboardData";

/* This TypeScript code snippet is defining an array named `dummyPerformanceMetricData` of type
`PerformanceMetricData[]`. Each element in this array represents a performance metric data object
with properties `title`, `incPerc`, and `record`. */
export const dummyPerformanceMetricData: PerformanceMetricData[] = [
  {
    title: "Followers",
    incPerc: 0.8,
    record: 93.2 * 1000, // 93.2k followers
  },
  {
    title: "Likes",
    record: 400 * 1000, // 400k likes
    incPerc: 1.21,
  },
  {
    title: "Comments",
    record: 289.1 * 1000, //289.1K Comments
    incPerc: 2.7,
  },
];

export const dummyPostActivity: PostActivityData[] = [
  {
    imgURL:
      "https://s3-alpha-sig.figma.com/img/265e/c6ee/02b971007749f0d098ed9cc982388a71?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=bZtSJOu4jNFTtnNbdp7Sr4JWc6AgsyFPhWsOGNIca1mm6JRR4EXu7meGsXeypoHp0A4QQVi0Q2bVEmsHfzu~G1eVtIZl5avkEZWMhuX53AImZVwuRPYe5n5MrUrCyi5MUm6~pryw7bM~ByvHZh-7CNJ6fP6gsEqb8KTjnh2MFESObJULpHATmMQK7Mj-n4A3yKtTuDYPQ6w~-sXDGxdch6eTsUUQx6aQsTmVu0khUTnzZelU2z3ZbuiEu8kKW7hLfn9G4jtShrgiH6NJyiNX9MKnbytWrQLYX9YWBH-g5SFoVOYYGD8mjh2pLjId7Z5ZrW5XtWcxX~l7smdjmewKIA__",
    content: "Success can be achieved by being bold enough",
    date: "May 30",
    veiwCount: 1.1 * 1000, // 1.1k views
  },
  {
    imgURL:
      "https://s3-alpha-sig.figma.com/img/5c9d/2eae/221bba91f2274e5073d2adecd334479f?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Ryj1DIyXgPICZQw1NN4n4o6MX20bWgOb1LIz-QO3kTFUNg0d7-Y740Ksp7XO-mZhqUnqEsZZbHP7VrtXZugC8v-BLkCG5ZoSHa6FPnX~wCC1qMFEX79thi6KToAVhcFo3EWJgtzEVvRTrRRGrR-tYxLxjKLrFyiKR4j5AGmTEJ4NEC3LZalz91bz4ywztqvhWLNKxDRDuMG5hVCgbBsqDzDocEkYt1WN6RqM6bhNZaxIjgFTgeG~6W1I0KnTr75SImZi2wAblNdJ32EDUBSYYlmLcEMFY65Mfgh1iF0KcdaUEOvLsT95RX44sB1~b9~FPBgHFCkZJrGLOu9zFd7zhQ__",
    content: "Knowing what to do can never be okay, you have to",
    date: "May 30",
    veiwCount: 3.1 * 1000, // 3.1k views
  },
];

export const dummyLocationVistorData: LocationVisitorData[] = [
  {
    location: "Nigeria",
    noOfVisitor: 5430,
    incPer: 2.2,
  },
  {
    location: "Germany",
    noOfVisitor: 2610,
    incPer: 1.12,
  },
  {
    location: "Switzerland",
    noOfVisitor: 1925,
    incPer: 1.1,
  },
  {
    location: "Iraq",
    noOfVisitor: 1571,
    incPer: 0.8,
  },
];
