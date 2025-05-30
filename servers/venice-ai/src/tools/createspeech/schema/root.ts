import { z } from "zod"

export const inputParamsSchema = {
  "input": z.string().min(1).max(4096).describe("The text to generate audio for. The maximum length is 4096 characters."),
  "model": z.literal("tts-kokoro").describe("The model ID of a Venice TTS model.").optional(),
  "response_format": z.enum(["mp3","opus","aac","flac","wav","pcm"]).describe("The format to audio in.").optional(),
  "speed": z.number().gte(0.25).lte(4).describe("The speed of the generated audio. Select a value from 0.25 to 4.0. 1.0 is the default.").optional(),
  "streaming": z.boolean().describe("Should the content stream back sentence by sentence or be processed and returned as a complete audio file.").optional(),
  "voice": z.enum(["af_alloy","af_aoede","af_bella","af_heart","af_jadzia","af_jessica","af_kore","af_nicole","af_nova","af_river","af_sarah","af_sky","am_adam","am_echo","am_eric","am_fenrir","am_liam","am_michael","am_onyx","am_puck","am_santa","bf_alice","bf_emma","bf_lily","bm_daniel","bm_fable","bm_george","bm_lewis","zf_xiaobei","zf_xiaoni","zf_xiaoxiao","zf_xiaoyi","zm_yunjian","zm_yunxi","zm_yunxia","zm_yunyang","ff_siwis","hf_alpha","hf_beta","hm_omega","hm_psi","if_sara","im_nicola","jf_alpha","jf_gongitsune","jf_nezumi","jf_tebukuro","jm_kumo","pf_dora","pm_alex","pm_santa","ef_dora","em_alex","em_santa"]).describe("The voice to use when generating the audio.").optional()
}