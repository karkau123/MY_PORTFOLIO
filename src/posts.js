export const posts = [
  {
    id: "embedding-benchmarks",
    category: "Inference",
    title: "How to benchmark an embedding service",
    summary: "Separate model execution, queueing, and network time before comparing CPU and GPU serving.",
    sections: [
      {
        title: "Measure at two boundaries",
        text: "Record model execution time and client-observed latency separately. The model timer tells you whether the execution path got faster. The client timer includes request serialization, network hops, queueing, batching delay, and response decoding. Moving execution to a GPU can help the first number while leaving the second almost unchanged.",
      },
      {
        title: "Keep the workloads comparable",
        text: "Use the same model, input texts, input length distribution, and output settings across runs. Warm up both deployments and sweep request rates with a fixed workload. Report throughput alongside p50 and p95 latency, and track timeouts explicitly. One fast median says little about what happens when the service approaches saturation.",
      },
      {
        title: "Tune batching against a latency target",
        text: "A larger batch can make better use of a GPU, but waiting to fill the batch adds queueing delay. Try several batch limits and queue delays with the same traffic. Choose the highest sustainable request rate that stays inside the client-facing latency budget, then validate it with different input lengths and burst patterns.",
      },
    ],
  },
  {
    id: "kafka-replay",
    category: "Backend",
    title: "Design Kafka consumers for replay",
    summary: "Make retries and historical reprocessing part of the consumer design from the start.",
    sections: [
      {
        title: "Choose the identity of a side effect",
        text: "An event ID is a useful starting point. If the system emits multiple legitimate updates for one record, use a key that captures the operation or version as well. Persist the key with the result in the same transaction so a process crash cannot leave the deduplication marker and the business data out of sync.",
      },
      {
        title: "Commit after durable processing",
        text: "A consumer can crash after writing a result and before committing its offset. The broker will deliver that event again. Make the write idempotent and commit after it succeeds. With concurrent work within one partition, only advance past offsets whose earlier messages have also completed.",
      },
      {
        title: "Rehearse recovery",
        text: "Replay a small time range in staging and check record counts, duplicates, and downstream side effects. Plan for schema changes and malformed messages. Give operators a way to inspect and reprocess failed events without forcing them to rerun the entire stream.",
      },
    ],
  },
  {
    id: "rag-evaluation",
    category: "Evaluation",
    title: "Find out where a RAG answer went wrong",
    summary: "Use evidence checks and answer-level metrics to distinguish retrieval failures from generation failures.",
    sections: [
      {
        title: "Start with a fixed evaluation set",
        text: "Keep a versioned sample of realistic questions, including ambiguous questions and cases with no supporting passage. For questions with known evidence, record the passages needed to answer them. Compare changes on the same examples so an apparent improvement can be traced to a specific retrieval or generation change.",
      },
      {
        title: "Inspect retrieval and generation independently",
        text: "Check whether the retrieved passages contain the evidence before scoring the response. When the evidence is absent, investigate filters, chunk boundaries, query wording, or ranking. When the evidence is present and the answer still adds unsupported claims, investigate context selection and prompting.",
      },
      {
        title: "Review disagreements before shipping",
        text: "Faithfulness and answer relevance measure different properties. An answer may stay grounded while missing the question, or sound relevant while going beyond the evidence. Read representative examples where the metrics disagree and record what failed. Those examples are useful regression cases for the next iteration.",
      },
    ],
  },
];
