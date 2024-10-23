import * as anchor from '@coral-xyz/anchor';
import { BN, Program } from '@coral-xyz/anchor';
import { Keypair, PublicKey, SendTransactionError } from '@solana/web3.js';
import { Mintware } from '../target/types/mintware';
import { DEV_USDCOIN_MINT, getProjectATA, getProjectPDA, MINT_WARE_PROGRAM_ID, POOL_PDA_SEED, settingsPDA } from '../src';
import { bs58 } from '@coral-xyz/anchor/dist/cjs/utils/bytes';
import { TOKEN_PROGRAM_ID } from '@coral-xyz/anchor/dist/cjs/utils/token';
import { getAssociatedTokenAddressSync} from '@solana/spl-token';
import { SYSTEM_PROGRAM_ID } from '@coral-xyz/anchor/dist/cjs/native/system';


describe('mint-ware', () => {
  const provider = anchor.AnchorProvider.env();
  anchor.setProvider(provider);
  const payer = provider.wallet as anchor.Wallet;
  const program = anchor.workspace.Mintware as Program<Mintware>;
  
  const mintWareKeypair = Keypair.fromSecretKey(bs58.decode(process.env.DEV_SECRET || '')) // 9zz22JgPSQcqG9Gh1ZqAudtdzjsA6Wuep2oAhQt6J2bC
  const projectPDA = getProjectPDA(mintWareKeypair.publicKey, DEV_USDCOIN_MINT)
  const poolATA = getProjectATA(mintWareKeypair.publicKey, DEV_USDCOIN_MINT)
  const signerATA = getAssociatedTokenAddressSync(DEV_USDCOIN_MINT, mintWareKeypair.publicKey) // Must be 8wW7dAv21nHUemoXZTpgRfBD6VJDqbTgv7aLEWWCbDg5
  
  // 7ZVEnYAR5KHNAhERDGnmuVLSUid4Dq3mCqMecAdXP4UY -> (USD Coin Dev: Gh9ZwEmdLJ8DscKNTkTqPbNwLNNBjuSzaG9Vp2KGtKJr) ATA: DHvbd5ZSoshQe5yY66hAy4Vm5FQhVhMVcLNE1g9gB3ZB


  console.log("PROGRAM ID:", MINT_WARE_PROGRAM_ID)

  console.log('Main User KEY (Singer): ', mintWareKeypair.publicKey.toBase58())
  //console.log('MW Settings PDA: ', settingsPDA.toBase58())
  console.log('MW Project PDA: ', projectPDA.toBase58())
  console.log('MINT: ', DEV_USDCOIN_MINT.toBase58())
  console.log('MW Project ATA (REWARD POOL): ', poolATA.toBase58()) // MUST BE 2MdvHtAfeffW4bK2o1dHPLesjo72Be1hNcnqBXB5XUoz
  console.log('Signer ATA (Token wallet): ', signerATA.toBase58())

  // it('Init MW PDA Acc', async () => {
  //   let newProject
  //   await program.methods
  //     .projectInit("BETA", "Project Beta, v0.2", 48, new BN(100000))
  //     .accountsStrict({
  //       project: projectPDA,
  //       poolAta: poolATA,
  //       tokenMint: DEV_USDCOIN_MINT,
  //       signerAta: signerATA,
  //       signer: mintWareKeypair.publicKey,
  //       systemProgram: SYSTEM_PROGRAM_ID,
  //      tokenProgram: TOKEN_PROGRAM_ID
  //     })
  //     .signers([mintWareKeypair])
  //     .rpc({commitment: 'confirmed'})
  //     .then(async (tx) => {
  //       console.log("Transaction succesfull, TX: ", tx)
  //       newProject = await program.account.project.fetch(
  //         projectPDA
  //       );
  //       console.log("Project PDA: ", newProject)
  //     })
  //     .catch((e) => {
  //       console.log("Transaction failed, E:", e)
  //     })
  //   expect(newProject?.rewardPercent).toEqual(48);
  // });


//TODO: add cleanup in project_close() fn FIRST!!!

  it('Close Project PDA', async () => {
    let isClosed = false
    await program.methods
      .projectClose()
      .accountsStrict({
        project: projectPDA,
        signer: mintWareKeypair.publicKey,
      })
      .signers([mintWareKeypair])
      .rpc({commitment: 'confirmed'})
      .then(async (tx) => {
        console.log("Transaction succesfull, TX: ", tx)
        console.log("Project was closed PDA: ", projectPDA)
        isClosed = true
      })
      .catch((e) => {
        console.log("Transaction failed, E:", e)
      })
    expect(isClosed).toEqual(true);
  });



  // console.log("NO BETA!")
  // it('Initialize MintWare', async () => {
  //   let newProject
  //   let tx = program.methods
  //     .projectInit("Test", "Description", 5, new BN(10))
  //     .accountsStrict({
  //       project: projectPDA,
  //       settings: settingsPDA,
  //       poolAta: projectATA,
  //       tokenMint: DEV_USDCOIN_MINT,
  //       signerAta: senderATA,
  //       signer: mintWareKeypair.publicKey,
  //       systemProgram: SYSTEM_PROGRAM_ID,
  //       tokenProgram: TOKEN_PROGRAM_ID
  //     }
  //     )
  //     .signers([mintWareKeypair])

  //   console.log("TX: ", tx)
  
  //   let result = await tx.rpc({commitment: 'confirmed'})
  //   .then(async () => {
  //     newProject = await program.account.project.fetch(
  //       mintWareKeypair.publicKey
  //     );
  //     console.log("NEW PROJECT PDA DATA:", newProject)
  //   })
  //   .catch(async (e) => {
  //     console.log("GODDAMNIT: ", e)
  //     console.log('LOGS: ', await e.getLogs())
  //   })

  //   console.log("RESULT", result)
  //   console.log("NEW PROJECT PDA DATA:", newProject)

  //   expect(newProject.rewardPercent).toEqual(5);
  // }, 10000);







  // it('Increment MintWare', async () => {
  //   await program.methods
  //     .increment()
  //     .accounts({ mintWare: mintWareKeypair.publicKey })
  //     .rpc();

  //   const currentCount = await program.account.mintWare.fetch(
  //     mintWareKeypair.publicKey
  //   );

  //   expect(currentCount.count).toEqual(1);
  // });

  // it('Increment MintWare Again', async () => {
  //   await program.methods
  //     .increment()
  //     .accounts({ mintWare: mintWareKeypair.publicKey })
  //     .rpc();

  //   const currentCount = await program.account.mintWare.fetch(
  //     mintWareKeypair.publicKey
  //   );

  //   expect(currentCount.count).toEqual(2);
  // });

  // it('Decrement MintWare', async () => {
  //   await program.methods
  //     .decrement()
  //     .accounts({ mintWare: mintWareKeypair.publicKey })
  //     .rpc();

  //   const currentCount = await program.account.mintWare.fetch(
  //     mintWareKeypair.publicKey
  //   );

  //   expect(currentCount.count).toEqual(1);
  // });

  // it('Set mintWare value', async () => {
  //   await program.methods
  //     .set(42)
  //     .accounts({ mintWare: mintWareKeypair.publicKey })
  //     .rpc();

  //   const currentCount = await program.account.mintWare.fetch(
  //     mintWareKeypair.publicKey
  //   );

  //   expect(currentCount.count).toEqual(42);
  // });

  // it('Set close the mintWare account', async () => {
  //   await program.methods
  //     .close()
  //     .accounts({
  //       payer: payer.publicKey,
  //       mintWare: mintWareKeypair.publicKey,
  //     })
  //     .rpc();

  //   // The account should no longer exist, returning null.
  //   const userAccount = await program.account.mintWare.fetchNullable(
  //     mintWareKeypair.publicKey
  //   );
  //   expect(userAccount).toBeNull();
  // });
});


