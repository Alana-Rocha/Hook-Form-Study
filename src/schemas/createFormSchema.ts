
import {z} from 'zod'

export const createUseFormSchema = z.object({
    name: z
      .string()
      .nonempty("O nome é obrigatório")
      .transform((username) => {
        return username
          .trim()
          .split(" ")
          .map((word) => {
            return word[0].toLocaleUpperCase().concat(word.substring(1));
          })
          .join(" ");
      }),
    email: z
      .string()
      .nonempty("O e-mail é obrigatório")
      .email("Formato de e-mail inválido"),
    password: z.string().min(6, "A senha precisa de no mínimo 6 caracteres"),
    techs: z
      .array(
        z.object({
          title: z.string().nonempty("O título é obrigatório"),
          knowledge: z.number({ coerce: true }).min(1, "min 1").max(100),
        })
      )
      .min(2, "Deve conter no mínimo 2 techs."),
  });
  
 export type CreateUseFormData = z.infer<typeof createUseFormSchema>;